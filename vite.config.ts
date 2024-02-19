import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
    // root: "/",
    build: {
        outDir: path.join(__dirname, "dist"),
        lib: {
            entry: path.resolve(__dirname, "index.scss"), // TODO library.scss (import the various components)
            name: "@guebbit/scss-library",
            fileName: "scss-library",
        },
    },
    server: {
        port: 8080,
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [],
});