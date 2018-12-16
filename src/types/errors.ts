const privateUserException = username =>
    `[ig-data:1]
    User '${username}' has a private account
    https://www.instagram.com/${username}`;
const nonexistantUserException = url =>
    `[ig-data:2]
    User doesn't exist
    ${url}`;
const nonexistantPublicationException = url =>
    `[ig-data:3]
    Publication doesn't exist
    ${url}`;
const invalidUrlException = (url, type) =>
    `[ig-data:4]
    Invalid ${type} url '${url}'`;

export {
    privateUserException,
    nonexistantUserException,
    nonexistantPublicationException,
    invalidUrlException
}