import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/js/main.js',
  dest: 'dist/lavalamp.js',
  plugins: [ babel() ],
  format: 'umd',
  moduleName: 'Lavalamp',
  sourceMap: true
};