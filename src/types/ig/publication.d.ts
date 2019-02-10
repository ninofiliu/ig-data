declare type Image = {
    __typename: 'GraphImage';
    display_resources: {
        src: string;
        [key: string]: any;
    }[];
};
declare type Video = {
    __typename: 'GraphVideo';
    video_url: string;
};
declare type Sidecar = {
    __typename: 'GraphSidecar';
    edge_sidecar_to_children: {
        edges: {
            node: Media;
        }[];
    };
};
declare type Media = {
    shortcode: string;
    location: null | any;
    dimensions: {
        width: number;
        height: number;
    };
} & (Image | Video | Sidecar);
declare type PublicationData = {
    entry_data: {
        PostPage: {
            graphql: {
                shortcode_media: Media;
                [key: string]: any;
            };
            [key: string]: any;
        }[];
    };
    [key: string]: any;
};
export { PublicationData, Media };
