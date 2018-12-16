import casesNames from '../cases-names';

import publicationImage from './publication/image';
import publicationVideo from './publication/video';
import publicationSidecar from './publication/sidecar';
import publicationPrivate from './publication/private';
import publicationNonexistant from './publication/nonexistant';
import publicationInvalidUrl from './publication/invalid-url';
import userPublic from './user/public';
import userPrivate from './user/private';
import userNonexistant from './user/nonexistant';
import userInvalidUrl from './user/invalid-url';

casesNames.forEach(name => {
    try {
        ({
            'publication/invalid-url': publicationInvalidUrl,
            'publication/nonexistant': publicationNonexistant,
            'publication/private': publicationPrivate,
            'publication/image': publicationImage,
            'publication/video': publicationVideo,
            'publication/sidecar': publicationSidecar,
            'user/public': userPublic,
            'user/private': userPrivate,
            'user/nonexistant': userNonexistant,
            'user/invalid-url': userInvalidUrl
        })[name](name);
    } catch (err) {
        if (err instanceof TypeError) {
            console.warn(`Caught error: invalid test name '${name}'. Check test/src/index.js and test/cases-names.js.`)
        } else {
            throw err;
        }
    }
});

setInterval(() => fetch('http://localhost:3081/done',{method: 'get'})
    .then(resp => resp.text())
    .then(text => console.log(text))
    .catch(reason => reason=='TypeError: Failed to fetch' && window.close()),
    1000,
    1000
);