# html-append-loader

## Install

```
$ npm install --save html-append-loader
```

## Usage

The loader will append content to html files within loader

```javascript
var script = escape('<srcipt>console.log("test")</srcipt>');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html?position=head&content='+script
        },
      ]
  }
}
```

This will generate a file `dist/index.html` containing the following:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
    <srcipt>console.log("test")</srcipt>
  </head>
  <body>
    <script src="bundle.js"></script>
    added content
  </body>
</html>
```


## License

MIT © [](https://github.com/safaring/html-append-loader)