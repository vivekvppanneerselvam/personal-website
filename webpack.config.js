const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {   
    return {
        context: __dirname,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization, dbname"
            },
            historyApiFallback: true          
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: ['@babel/proposal-class-properties']
                        }
                    }
                }, {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }, {
                    test: /\.(png|PNG|gif|woff|woff2|eot|ttf|svg|jpg|mp3|ogg|mp4|avi|webm|mkv|mov|flv)$/,
                    use: 'file-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                filename: 'index.html',
                favicon: path.resolve(__dirname, 'public/favicon.ico')
            })
        ]       
    }
};