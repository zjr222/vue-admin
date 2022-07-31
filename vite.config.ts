import { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    base: './',
    plugins: [vue(),
    viteMockServe({
      mockPath: "mock", // 你的mock文件地址
      localEnabled: command === "serve", // 开发环境
      prodEnabled: command !== "serve", // 生产环境 
      watchFiles: true, // 监视文件更改
      // injectCode: `
      //   import { setupProdMockServer } from './utils/mockProdServer';
      //   setupProdMockServer();
      // `,   //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      // // 如果prodEnable设置为true，则在编译打包的时候，会把mock的文件打包进去，如果你不写injectFile，那就是默认注入到main.ts/main.js
      // injectFile: resolve("src/main.tsx"),      // 在全局中注入代码,不配置的话默认是在src/main.js/main.ts
    })],
    resolve: {
      alias: {
        "@/": resolve(__dirname, 'src'),
        "@/components": resolve(__dirname, 'src/components'),
        "@/routes": resolve(__dirname, 'src/routes'),
        "@/pages": resolve(__dirname, 'src/pages'),
        "@/utils": resolve(__dirname, 'src/utils'),
        "@/https": resolve(__dirname, 'src/https'),
      }
    },
    server: {
      hmr: true,
      proxy: {
        // 字符串简写写法
        // 选项写法
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    }
  }
}
