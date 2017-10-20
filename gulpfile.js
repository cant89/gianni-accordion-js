var gulp = require( 'gulp' ),
    watch = require( 'gulp-watch' ),
    notify = require( 'gulp-notify' ),
    webpack = require("webpack"),
    gutil = require("gulp-util"),
    webpackConfig = require("./webpack.config.js");

var onError = function( err ) {
  console.log( 'An error occurred:', err.message );
  notify.onError("ERROR: " + err.plugin)(err);
  this.emit( 'end' );
}

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

myDevConfig.plugins = [
    new webpack.ProvidePlugin({})
];

var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
         // output options
     }));
		callback();
	});
});

gulp.task( 'watch', function() {
	gulp.watch( './src/**/*.js' , ['webpack:build-dev'] );
});

gulp.task( 'default', ['webpack:build-dev', 'watch' ], function() {});
