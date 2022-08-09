import { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
} from 'vite-plugin-style-import'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    base: './',
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock", // 你的mock文件地址
        localEnabled: command === "serve", // 开发环境
        prodEnabled: command !== "serve", // 生产环境 
        watchFiles: true, // 监视文件更改
      }),
      Components({
        // ui库解析器，也可以自定义
        resolvers: [
          AntDesignVueResolver()
        ]
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-import.d.ts'
      }),
      createStyleImportPlugin({
        resolves: [
          AndDesignVueResolve(),
        ],
        libs: [
          // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`
            },
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
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
    // server: {
    //   hmr: true,
    //   proxy: {
    //     // 字符串简写写法
    //     // 选项写法
    //     '/api': {
    //       target: 'http://jsonplaceholder.typicode.com',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    //   }
    // }
  }
}
