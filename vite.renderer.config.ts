import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const alias = {
    // '@mui': resolve(__dirname, 'node_modules/@mui'),
}
// https://vitejs.dev/config
export default defineConfig({
    plugins: [react()],
    // build: {
    //     outDir: "dist",
    //     rollupOptions: {
    //         input: resolve(__dirname, 'index.html'), // 指定入口文件为 index.html
    //         output: {
    //             dir: '.vite/renderer', // 输出目录
    //             format: 'es', // 输出格式
    //         },
    //     },
    // },
    optimizeDeps: {
        // include: ['hoist-non-react-statics'],
        // exclude: ['@mui/material', '@mui/icons-material',],
    },
    resolve: {
        alias: alias,
    }
});
