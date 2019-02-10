const assert = require('assert');
const igdata = require('../dist/main');

describe('Publications', () => {
    it('Should detect invalid URLs', async () => {
        try {
            await igdata.publication.fromUrl('https://www.youtube.com/watch?v=2mKDvp7MavQ');
            throw new Error('Should throw error');
        } catch(err) {
            if (!err.toString().includes('[ig-data:4]')) throw err;
        }
    }),
    it('Should detect private users', async () => {
        try {
            await igdata.publication.fromUrl('https://www.instagram.com/p/BWutphrFVauY7EG7PfEpBG1ZfpvUQqiWCnx6jM0/');
        } catch(err) {
            if (!err.toString().includes('[ig-data:1]')) throw err;
        }
    }),
    it('Should get image data', async () => {
        const data = await igdata.publication.fromShortcode('Btq6EPzAH72');
        assert.deepEqual(Object.keys(data), ['shortcode', 'sidecar', 'location', 'media']);
        assert.equal(data.media.type, 'image');
    }),
    it('Should get video data', async () => {
        const data = await igdata.publication.fromShortcode('BllIKy3B6aO');
        assert.deepEqual(Object.keys(data), ['shortcode', 'sidecar', 'location', 'media']);
        assert.equal(data.media.type, 'video');
    }),
    it('Should get sidecar data', async () => {
        const data = await igdata.publication.fromShortcode('BsgPUDEgNg6');
        assert.deepEqual(Object.keys(data), ['shortcode', 'sidecar', 'location', 'media']);
        assert.equal(data.media[0].type, 'image');
    })
});

describe('Profile', () => {
    it('Should detect invalid URLs', async () => {
        try {
            await igdata.user.fromUrl('https://www.youtube.com/watch?v=XzmnM2PLPfs&index=49&list=LL1gxAMswILp7OOrwj-OiFQQ');
            throw new Error('Should throw error');
        } catch(err) {
            if (!err.toString().includes('[ig-data:4]')) throw err;
        }
    }),
    it('Should detect nonexistant users', async () => {
        try {
            await igdata.user.fromUsername(''+Math.random());
            throw new Error('Should throw error');
        } catch(err) {
            if (!err.toString().includes('[ig-data:2]')) throw err;
        }
    }),
    it('Should get public user infos', async () => {
        const data = await igdata.user.fromUsername('ssttaacckkyy');
        assert.equal(data.id, '2182883331');
        assert.equal(data.username, 'ssttaacckkyy');
        assert(!!data.profilePicture);
    }),
    it('Should get private user info', async () => {
        const data = await igdata.user.fromUsername('i.am.a.private.user');
        assert.equal(data.id, '5757073655');
        assert.equal(data.username, 'i.am.a.private.user');
        assert(!!data.profilePicture);
    })
})