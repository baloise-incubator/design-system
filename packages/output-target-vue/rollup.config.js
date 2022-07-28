// import pkg from './package.json';

// export default {
//   input: 'dist/index.js',

//   external: ['path', 'node-sass', 'fs', 'util'],

//   output: [
//     {
//       format: 'cjs',
//       file: pkg.main,
//     },
//     {
//       format: 'es',
//       file: pkg.module,
//     },
//   ],
// };
import baseConfig from '../../rollup.base'

export default {
  ...baseConfig,
  external: ['path', 'fs', 'util'],
}
