import path from 'path'

// If demo site
let build = null
if(!process.env.DEMO){
	build = {
		outDir: '../dist',
		lib: {
		  entry: path.resolve(__dirname, 'src/main.js'),
		  name: 'Repeatable',
		  fileName: (format) => `repeatable.${format}.js`
		},
	}
}

export default {
	root: `src`,
	build,
}