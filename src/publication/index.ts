import { PublicationFromShortcode, PublicationFromUrl, PublicationFromSource, Media } from '../types/main';
import getMedia from './get-media';
import dataFromSource from '../shared/data-from-source';
import http from '../http';
import IgDataError, { IgDataErrorCode } from '../types/error';

/**
 * Get publication data from its shortcode
 * @param shortcode the 11 characters in the url of the publication: instagram.com/p/<shortcode>
 */
const fromShortcode: PublicationFromShortcode = shortcode => fromUrl(`https://www.instagram.com/p/${shortcode}`);

/**
 * Get publication data from its url
 * @param url the url of the publication, ex: https://www.instagram.com/p/BfJX1m1lZ5j/
 */
const fromUrl: PublicationFromUrl = url => {
    if (!/^https:\/\/(www.)?instagram.com\/p\/[a-zA-Z0-9\-_]*/.test(url)) {
        throw new IgDataError(IgDataErrorCode.INVALID_URL, {url});
    }
    return http(url)
        .then(resp => {
            if (resp.status==404) throw new IgDataError(IgDataErrorCode.NONEXISTANT_PUBLICATION, {url})
            return resp;
        })
        .then(resp => resp.text())
        .then(source => fromSource(source));
}

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
        if (isPrivate) throw new IgDataError(IgDataErrorCode.PRIVATE_USER, {username});
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