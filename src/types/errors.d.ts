declare const privateUserException: (username: any) => string;
declare const nonexistantUserException: (url: any) => string;
declare const nonexistantPublicationException: (url: any) => string;
declare const invalidUrlException: (url: any, type: any) => string;
export { privateUserException, nonexistantUserException, nonexistantPublicationException, invalidUrlException };
