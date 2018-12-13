type ProfileData = {
    entry_data: {
        ProfilePage: {
            graphql: {
                user: {
                    is_private: boolean,
                    username: string
                }
            }
        }[]
    }
}

export {
    ProfileData
}