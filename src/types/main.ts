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
type FromShortcode = (shortcode: string) => Promise<Publication>;
type FromUrl = (url: string) => Promise<Publication>;
type FromSource = (source: string) => Promise<Publication>;

export { Media, Publication, FromShortcode, FromUrl, FromSource }