import { user } from '../../../dist/ig-data';
import send from '../send';

const url = 'http://example.com';

const test = name => {
    user.fromUrl(url)
        .then(() => send(name, false, 'Returs user, but should throw an invalidUrlException'))
        .catch(reason => /^\[ig-data:4\]/.test(reason)
            ? send(name, true)
            : send(name, false, 'Throw error, but should throw an invalidUrlException: '+reason)
        );
}

export default test;