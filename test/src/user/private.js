import { user } from '../../../dist/ig-data';
import send from '../send';

const username = 'i.am.a.private.user';

const test = name => {
    user.fromUsername(username)
        .then(() => send(name, true))
        .catch(reason => send(name, false, reason));
}

export default test;