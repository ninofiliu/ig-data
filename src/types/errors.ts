const PrivateUserException = username => ({
    code: 'ig-data:1',
    description: 'User has a private account',
    username: username
});

export {
    PrivateUserException
}