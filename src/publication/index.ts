import { PublicationFromShortcode, PublicationFromUrl, PublicationFromSource, Media } from '../types/main';
import getMedia from './get-media';
import { privateUserException } from '../types/errors';
import dataFromSource from '../shared/data-from-source';
import { nonexistantPublicationException } from '../types/errors';

/**
 * Get publication data from its shortcode
 * @param shortcode the 11 characters in the url of the publication: instagram.com/p/<shortcode>
 */
const fromShortcode: PublicationFromShortcode = shortcode => fromUrl(`https://www.instagram.com/p/${shortcode}`);

/**
 * Get publication data from its url
 * @param url the url of the publication, ex: https://www.instagram.com/p/BfJX1m1lZ5j/
 */
const fromUrl: PublicationFromUrl = url => fetch(url)
    .then(resp => {
        if (resp.status==404) throw nonexistantPublicationException(url);
        return resp;
    })
    .then(resp => resp.text())
    .then(source => fromSource(source));

/**
 * Get publication data from its source code
 * @param source example: content of https://www.instagram.com/p/BfJX1m1lZ5j/
 */
const fromSource: PublicationFromSource = source => {

    let data = dataFromSource(source);

    // typeguard
    if ('ProfilePage' in data.entry_data) {
        // check if private
        let isPrivate = data.entry_data.ProfilePage[0].graphql.user.is_private;
        let username = data.entry_data.ProfilePage[0].graphql.user.username;
        if (isPrivate) {
            throw privateUserException(username);
        }
    }

    // typeguard
    if ('PostPage' in data.entry_data) {

        // shorthand
        let dataMedia = data.entry_data.PostPage[0].graphql.shortcode_media;
    
        // publication data
        let shortcode: string = dataMedia.shortcode;
        let sidecar: boolean = dataMedia.__typename=='GraphSidecar';
        let location: null | any = dataMedia.location;
        let media: Media | Media[];
        if (sidecar) {
            if ('edge_sidecar_to_children' in dataMedia) {
                media = dataMedia.edge_sidecar_to_children.edges.map(edge => getMedia(edge.node));
            } else {
                throw Error('TS2339');
            }
        } else {
            media = getMedia(dataMedia);
        }
    
        return Promise.resolve({
            shortcode,
            sidecar,
            location,
            media
        });

    }

}

export {
    fromShortcode,
    fromUrl,
    fromSource
}