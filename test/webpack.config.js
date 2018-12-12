module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: `${__dirname}`,
        filename: 'index.web.js'
    },
    target: 'web'
}