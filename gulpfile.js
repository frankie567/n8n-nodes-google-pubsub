const { src, dest } = require('gulp');

function copyIcons() {
	return src('src/**/*.{png,svg}')
		.pipe(dest('dist'));
}

exports.default = copyIcons;
