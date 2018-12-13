import { UserFromUsername, UserFromUrl, UserFromSource } from '../types/main';
import dataFromSource from '../shared/data-from-source';
import { nonexistantUserException } from '../types/errors';

const fromUsername: UserFromUsername = username => fromUrl(`https://www.instagram.com/${username}`);

const fromUrl: UserFromUrl = url => fetch(url)
    .then(resp => {
        if (resp.status==404) throw nonexistantUserException(url);
        return resp;
    })
    .then(resp => resp.text())
    .then(source => fromSource(source))

const fromSource: UserFromSource = source => {

    let data = dataFromSource(source);
    if ('ProfilePage' in data.entry_data) {
        let userData = data.entry_data.ProfilePage[0].graphql.user; // shorthand
        return Promise.resolve({
            id: userData.id,
            username: userData.username,
            fullName: userData.full_name,
            biography: userData.biography,
            isPrivate: userData.is_private,
            isVerified: userData.is_verified,
            profilePicture: userData.profile_pic_url_hd,
            followers: userData.edge_followed_by.count,
            follows: userData.edge_follow.count,
            externalUrl: userData.external_url
        })
    } else {
        throw Error('TS2339');
    }
}

export {
    fromUsername,
    fromUrl,
    fromSource
}