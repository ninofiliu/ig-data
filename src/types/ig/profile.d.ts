declare type ProfileData = {
    entry_data: {
        ProfilePage: {
            graphql: {
                user: {
                    biography: string;
                    external_url: string;
                    edge_followed_by: {
                        count: number;
                    };
                    edge_follow: {
                        count: number;
                    };
                    full_name: string;
                    id: string;
                    is_private: boolean;
                    is_verified: boolean;
                    profile_pic_url_hd: string;
                    username: string;
                    [key: string]: any;
                };
            };
        }[];
    };
    [key: string]: any;
};
export { ProfileData };
