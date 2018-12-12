import { publication } from '../../../dist/ig-data';
import send from '../send';

const shortcode = 'BqAGSK4hJH2';

const test = name => {
    publication.fromShortcode(shortcode)
        .then(() => send(name, true))
        .catch(reason => send(name, false, 'error in promise: '+reason));
}

export default test;