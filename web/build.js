const path = require('path');
const { build } = require('esbuild');

const options = {
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
  },
  entryPoints: [path.resolve(__dirname, 'src/main.ts')],
  minify: false,
  bundle: true,
  target: 'es2016',
  platform: 'browser',
  outdir: path.resolve(__dirname, 'html'),
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
