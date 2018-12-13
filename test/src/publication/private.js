import { publication } from '../../../dist/ig-data';
import send from '../send';

const shortcode = 'BWutphrFVauY7EG7PfEpBG1ZfpvUQqiWCnx6jM0';

const test = name => {
    publication.fromShortcode(shortcode)
        .then(() => send(name, false, `Didn't raise a privateUserException`))
        .catch(reason => /^\[ig-data:1\]/.test(reason)
            ? send(name, true)
            : send(name, false, reason));
}

export default test;