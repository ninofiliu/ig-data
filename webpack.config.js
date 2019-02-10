const common = {
    entry: './src/index.ts',
    externals: {},
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },
    output: {
        path: `${__dirname}/dist`,
        library: 'ig-data',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
}

// builds a CommonJS module
const main = {
    ...common,
    output: {
        ...common.output,
        filename: 'main.js'
    },
    target: 'node'
}

// builds an ES module
const browser = {
    ...common,
    output: {
        ...common.output,
        filename: 'browser.js'
    },
    target: 'web'
}

module.exports = [main, browser];