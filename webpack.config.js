const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

// var template = require("pug-loader!./file.pug");

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
             contentBase: './dist',
             hot: true,
             inline: true,
           },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new LiveReloadPlugin({
            appendScriptTag: true
          }),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                      pretty: true,
                    },
                  },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                   loader: 'file-loader',
                   options: {
                       name: '[name].[ext]',
                       outputPath: 'fonts/'
                   }
               }]
                
              },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            // url: false,
                            minimize: true,
                            sourceMap: true
                        }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                  ]
                })
              },
              {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            //   {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //       fallback: 'style-loader',
            //       use: [
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 // If you are having trouble with urls not resolving add this setting.
            //                 // See https://github.com/webpack-contrib/css-loader#url
            //                 url: false,
            //                 minimize: true,
            //                 sourceMap: true
            //             }
            //         }, 
            //       ]
            //     })
            //   },
             
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
        ]
    }
};