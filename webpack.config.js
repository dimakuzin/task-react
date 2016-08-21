

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/js/bundle.js",
            },

    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};