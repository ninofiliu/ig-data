import { Media } from '../types/main';
import * as ig from '../types/ig';

type GetMediaImage = (data: ig.Media) => Media;
type GetMediaVideo = (data: ig.Media) => Media;
type GetMedia = (data: ig.Media) => Media;

const getMediaImage: GetMediaImage = data => {
    if ('display_resources' in data) {
        return {
            type: 'image',
            width: data.dimensions.width,
            height: data.dimensions.height,
            src: data.display_resources[data.display_resources.length-1].src
        }
    }
    throw Error('TS2339');
}
const getMediaVideo: GetMediaVideo = data => {
    if ('video_url' in data) {
        return {
            type: 'video',
            width: data.dimensions.width,
            height: data.dimensions.height,
            src: data.video_url
        }
    }
    throw Error('TS2339');
}

const getMedia: GetMedia = data => data.__typename=='GraphImage' ? getMediaImage(data) : getMediaVideo(data);

export default getMedia;