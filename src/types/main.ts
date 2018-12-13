type Media = {
    type: 'image' | 'video';
    width: number;
    height: number;
    src: string;
}
type Publication = {
    shortcode: string;
    sidecar: boolean;
    media: Media | Media[]; // this.sidecar ? Media : Media[];
    location: null | any; // TODO
}
type User = {
    id: string,
    username: string,
    fullName: string,
    biography: string,
    isPrivate: boolean,
    isVerified: boolean,
    profilePicture: string,
    followers: number,
    follows: number,
    externalUrl: string | null,
}

type PublicationFromShortcode = (shortcode: string) => Promise<Publication>;
type PublicationFromUrl = (url: string) => Promise<Publication>;
type PublicationFromSource = (source: string) => Promise<Publication>;
type UserFromUsername = (username: string) => Promise<User>;
type UserFromUrl = (url: string) => Promise<User>;
type UserFromSource = (source: string) => Promise<User>;

export {
    Media,
    Publication,
    User,
    PublicationFromShortcode,
    PublicationFromUrl,
    PublicationFromSource,
    UserFromUsername,
    UserFromUrl,
    UserFromSource
}