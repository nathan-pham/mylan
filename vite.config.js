import { defineConfig } from "vite"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias: {
            "@css": path.resolve(__dirname, "./src/css"),
            "@js": path.resolve(__dirname, "./src/js")
        }
    }
})
