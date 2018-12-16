import { publication } from '../../../dist/ig-data';
import send from '../send';

const url = 'http://www.example.com';

const test = name => {
    publication.fromUrl(url)
        .then(() => send(name, false, 'Should throw invalidUrlException'))
        .catch(reason => {
            if (/^\[ig-data:4\]/.test(reason)) {
                send(name, true);
                return;
            }
            send(name, false, 'Uncaught error in promise: '+reason)
        });
}

export default test;