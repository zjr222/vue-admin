import path from "path"
import { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// 主题切换插件
import { themePreprocessorPlugin, themePreprocessorHmrPlugin } from "@zougt/vite-plugin-theme-preprocessor";
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
        supportTs: true, // 打开后 可以读取 ts 文件模块 请注意 打开后将无法监视.js 文件
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
      themePreprocessorPlugin({
        // 使用Less
        less: {
          // 此处配置自己的主题文件
          multipleScopeVars: [
            {
              scopeName: "theme-default",
              path: path.resolve("src/theme/default.less"),
            },
            {
              scopeName: "theme-dark",
              path: path.resolve("src/theme/dark.less"),
            },
          ],
          defaultScopeName: "theme-default", // 默认取 multipleScopeVars[0].scopeName
          extract: false,// 在生产模式是否抽取独立的主题css文件
        },
      }),
      // develop need theme HMR
      themePreprocessorHmrPlugin()
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
        "@/store": resolve(__dirname, 'src/store'),
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
