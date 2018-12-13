const DtsBundleWebpack = require('dts-bundle-webpack');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

class CleanPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('CleanPlugin', stats => {
            fs.readdir('dist', (err, files) => err===null && files.forEach(file => {
                if (!['ig-data.js', 'ig-data.d.ts'].includes(file)) {
                    let dirname = `./dist/${file}`;
                    rimraf(dirname, err => err && console.log(err));
                }
            }))
        });
    }
}

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ig-data.js',
        library: 'ig-data',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new DtsBundleWebpack({
            name: 'ig-data',
            main: 'dist/index.d.ts',
            removeSource: true
        }),
        new CleanPlugin()
    ]
}