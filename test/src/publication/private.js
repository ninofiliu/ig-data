import { publication } from '../../../dist/ig-data';
import send from '../send';

const shortcode = 'BWutphrFVauY7EG7PfEpBG1ZfpvUQqiWCnx6jM0';

const test = name => {
    publication.fromShortcode(shortcode)
        .then(() => send(name, true))
        .catch(exception => exception.code=='ig-data:1'
            ? send(name, true)
            : send(name, false, `Exception in promise: ${exception}`)
        );
}

export default test;