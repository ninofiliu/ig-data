const igData = require('../dist/ig-data');

const shortcodes = {
    image: 'BrDpCEFgv-l',
    video: 'BllIKy3B6aO',
    sidecar: 'Bp2Vke3A5wo'
};
for (let type in shortcodes) {
    igData.publication.fromShortcode(shortcodes[type])
        .then(pub => console.log(`Shortcode ${shortcodes[type]} (${type}) works:`, pub))
        .catch(reason => console.log(`Shortcode ${shortcodes[type]} (${type}) doesn't works:`, reason));
}