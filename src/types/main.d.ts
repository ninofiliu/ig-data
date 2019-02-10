declare type Media = {
    type: 'image' | 'video';
    width: number;
    height: number;
    src: string;
};
declare type Publication = {
    shortcode: string;
    sidecar: boolean;
    media: Media | Media[];
    location: null | any;
};
declare type User = {
    id: string;
    username: string;
    fullName: string;
    biography: string;
    isPrivate: boolean;
    isVerified: boolean;
    profilePicture: string;
    followers: number;
    follows: number;
    externalUrl: string | null;
};
declare type PublicationFromShortcode = (shortcode: string) => Promise<Publication>;
declare type PublicationFromUrl = (url: string) => Promise<Publication>;
declare type PublicationFromSource = (source: string) => Promise<Publication>;
declare type UserFromUsername = (username: string) => Promise<User>;
declare type UserFromUrl = (url: string) => Promise<User>;
declare type UserFromSource = (source: string) => Promise<User>;
export { Media, Publication, User, PublicationFromShortcode, PublicationFromUrl, PublicationFromSource, UserFromUsername, UserFromUrl, UserFromSource };
