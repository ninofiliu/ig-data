import { FromShortcode, FromUrl, FromSource, Media } from '../types/main';
import * as ig from '../types/ig';
import getMedia from './get-media';

const fromShortcode: FromShortcode = shortcode => fromUrl(`https://www.instagram.com/p/${shortcode}`);

const fromUrl: FromUrl = url => fetch(url)
    .then(resp => resp.text())
    .then(source => fromSource(source));

const fromSource: FromSource = source => {

    // page data
    let html = (new DOMParser()).parseFromString(source, 'text/html');
    let script = html.getElementsByTagName('script')[4].innerText;
    script = script.substr(script.indexOf('{'));
    script = script.substr(0, script.lastIndexOf('}')+1);
    let data: ig.PublicationData = JSON.parse(script);
    let dataMedia = data.entry_data.PostPage[0].graphql.shortcode_media; // shorthand

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

export {
    fromShortcode,
    fromUrl,
    fromSource
}