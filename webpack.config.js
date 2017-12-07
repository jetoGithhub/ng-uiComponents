const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/module.ts'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'ngbcp-components.bundle.js',
    libraryTarget: "umd",
    library:"ngbcp-components"
  },
   resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
     	{ 
     		test: /\.ts$/, 
     		loader: 'ts-loader'
    	}
    ]
  }
};