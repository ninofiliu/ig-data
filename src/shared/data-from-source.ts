import { PublicationData, ProfileData } from '../types/ig';

type DataFromSource = (source: string) => PublicationData | ProfileData;

/**
 * Get the content of window._sharedData
 * @param source source code of page (profile or publication)
 */
const dataFromSource: DataFromSource = source => {
    let html = (new DOMParser()).parseFromString(source, 'text/html');
    let script = Array.from(html.getElementsByTagName('script'))
        .map(elt => elt.innerText)
        .filter(text => /^[ ]*window._sharedData/.test(text))
        [0];
    script = script.substr(script.indexOf('{'));
    script = script.substr(0, script.lastIndexOf('}')+1);
    return JSON.parse(script);
}

export default dataFromSource;