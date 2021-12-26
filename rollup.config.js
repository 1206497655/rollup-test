import vue2 from 'rollup-plugin-vue2';
import less from 'rollup-plugin-less';
import postcss from 'rollup-plugin-postcss';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';

export default {
    input: './src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    plugins: [
        alias({
            resolve: ['.vue'],
            entries: [
              { find: '@', replacement: __dirname + '/src' },
            ]
        }),
        vue2({
            css: true,
            compileTemplate: true
        }),
        less(),
        postcss(),
        buble(),
        nodeResolve({ browser: true, main: true }),
        commonjs()
    ]
}