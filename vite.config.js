import path from 'path'

export default {
	root: `src`,
	build: {
		outDir: '../dist',
		lib: {
		  entry: path.resolve(__dirname, 'src/main.js'),
		  name: 'Repeatable',
		  fileName: (format) => `repeatable.${format}.js`
		},
	},
}