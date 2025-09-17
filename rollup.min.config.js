import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig([
  // Ultra-minimal ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: false,
    },
    external: ['react', 'react-dom'],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        exclude: ['**/*.test.*', '**/__tests__/**'],
        removeComments: true,
        target: 'ES2019',
        module: 'ES2020'
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.warn'],
          passes: 3,
          unsafe: true,
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_proto: true,
          unsafe_regexp: true,
          unsafe_undefined: true,
          hoist_funs: true,
          hoist_vars: true,
          reduce_vars: true,
          collapse_vars: true,
          sequences: true,
          dead_code: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          side_effects: false
        },
        mangle: {
          properties: {
            regex: /^_/
          },
          toplevel: true
        },
        format: {
          comments: false
        }
      })
    ]
  },
  // Ultra-minimal CJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: false,
      exports: 'named'
    },
    external: ['react', 'react-dom'],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        exclude: ['**/*.test.*', '**/__tests__/**'],
        removeComments: true,
        target: 'ES2019',
        module: 'CommonJS'
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.warn'],
          passes: 3,
          unsafe: true,
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_proto: true,
          unsafe_regexp: true,
          unsafe_undefined: true,
          hoist_funs: true,
          hoist_vars: true,
          reduce_vars: true,
          collapse_vars: true,
          sequences: true,
          dead_code: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          side_effects: false
        },
        mangle: {
          properties: {
            regex: /^_/
          },
          toplevel: true
        },
        format: {
          comments: false
        }
      })
    ]
  }
]);
