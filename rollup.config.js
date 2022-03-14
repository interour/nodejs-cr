import typescript from '@rollup/plugin-typescript';

import { main, target } from './package.json'

export default {
    input: main,
    output: {
      file: target,
      format: 'cjs'
    },
    plugins: [typescript()],
    external: [
      'express',
    ]
  };
  