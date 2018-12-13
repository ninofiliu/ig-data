import { publication } from '../../../dist/ig-data';
import send from '../send';

const shortcode = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

const test = name => {
    publication.fromShortcode(shortcode)
        .then(() => send(name, false, `Didn't throw a nonexistantPublicationException`))
        .catch(reason => /^\[ig-data:3\]/.test(reason)
            ? send(name, true)
            : send(name, false, reason)
        )
}

export default test;