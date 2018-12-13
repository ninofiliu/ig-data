import casesNames from '../cases-names';

import publicationImage from './publication/image';
import publicationVideo from './publication/video';
import publicationSidecar from './publication/sidecar';
import publicationPrivate from './publication/private';

casesNames.forEach(name => ({
    'publication/image': publicationImage,
    'publication/video': publicationVideo,
    'publication/sidecar': publicationSidecar,
    'publication/private': publicationPrivate
})[name](name));

setInterval(() => fetch('http://localhost:3081/done',{method: 'get'})
    .then(resp => resp.text())
    .then(text => console.log(text))
    .catch(reason => reason=='TypeError: Failed to fetch' && window.close()),
    1000
);