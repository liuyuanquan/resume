module.exports = {
    entry: {
        'js/index.js': './js/index.js'
    },
    output: {
        path: '../build',
        filename: '[name]',
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: []
    }
};