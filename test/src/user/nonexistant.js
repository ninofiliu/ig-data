import { user } from '../../../dist/ig-data';
import send from '../send';

const username = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

const test = name => {
    user.fromUsername(username)
        .then(() => send(name, false, `Didn't throw a nonExistantUserException`))
        .catch(reason => /^\[ig-data:2\]/.test(reason)
            ? send(name, true)
            : send(name, false, reason)
        )
}

export default test;