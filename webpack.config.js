const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //entry: './src/js/app.js',
    entry: './src/components/app.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundleeee.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx$/,
                loader: "ts-loader"
            },
            {
                test: /\.(gif|png|jpg|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: { disable: true }
                    }
                ]
            }
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: path.resolve(__dirname, "dist/index.html")
        })
    ]

}