# ig-data

Get urls to images and videos of Instagram posts and profile pictures.

By [Nino Filiu](https://ninofiliu.com/hire-me)

## Installation

```bash
npm install ig-data --save
```

## Usage

This package is to be used on the client side since it uses, among other things, [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser).

#### Example 1 - access publication data

```js
import { publication } from 'ig-data';

publication.fromUrl('https://www.instagram.com/p/BfJX1m1lZ5j/')
    .then(data => console.log(`

        Location: ${JSON.stringify(data.location)}
        Media type: ${data.media.type}
        Media dimensions: ${data.media.width}x${data.media.height}
        Media resource in HD: ${data.media.src}

    `))
    .catch(reason => {
        if (/^\[ig-data:1\]/.test(reason)) {
            console.log(`Can't access the publication data of private users`))
        }
        if (/^\[ig-data:3\]/.test(reason)) {
            console.log(`Publication doesn't exist`)
        }
    }
```

#### Example 2 - access user data

```js
import { user } from 'ig-data';

user.fromUsername('ssttaacckkyy')
    .then(data => console.log(`
        
        User ID: ${data.id}
        Full name: ${data.fullName}
        User bio: ${data.biography}
        User is private: ${data.isPrivate}
        Profile picture in HD: ${data.profilePicture}
        Number of followers: ${data.followers}
        & more...

    `))
    .catch(reason => {
        if (/^\[ig-data:2\]/.test(reason)) {
            console.log(`User doesn't exist`)
        }
    })
```

#### Full API

Type definitions and JSDoc are in [`dist/ig-data.d.ts`](https://github.com/ninofiliu/ig-data/blob/master/dist/ig-data.d.ts).

Errors are thrown as `[ig-data:<errcode>] <message>`:

* `[ig-data:1] Username '<username>' has a private account`: Publications of this user can't be accessed publicly, so `publication.fromShortcode` and `publication.fromUrl` both fail. Use `publication.fromSource` instead.
* `[ig-data:2] User doesn't exist`: a 404 was returned while trying to access a profile page. Either the submitted URL is invalid, or the user doesn't exist.
* `[ig-data:3] Publication doesn't exist`: same, but for a publication page.