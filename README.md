From working at Facebook I've experienced a pretty darn awesome React setup. I love working with React and started toying with it in some side projects but it took me literally days to get everything set up just the way I wanted:

 - Gulp, a build system to do all build steps listed below
 - browserify, to do the actual bundling into a single JS file
 - reactify, to do the JSX transformation
 - gulp-watch, a more sophisticated version of gulp.watch that will fire even when a file has been added or removed
 - plumber, to gracefully catch errors along every step of the way so my gulp watch command stays alive
 - uglify, to minify the final JS file

Commands include:

gulp js - build the JS bundle to root/js/bundle.js
gulp watch - gulp js on init and then again anytime watch detects JS changes
gulp clean - rm root/js/bundle.js
