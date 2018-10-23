module: {
    loaders: [
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=2500'
        }
    ]
}