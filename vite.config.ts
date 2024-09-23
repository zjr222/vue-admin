import path from 'path'
import { ConfigEnv, UserConfig, defineConfig } from 'vite'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// 主题切换插件
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin,
} from '@zougt/vite-plugin-theme-preprocessor'
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
} from 'vite-plugin-style-import'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: './',
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock', // 你的mock文件地址
        localEnabled: command === 'serve', // 开发环境
        prodEnabled: command !== 'serve', // 生产环境
        watchFiles: true, // 监视文件更改
        supportTs: true, // 打开后 可以读取 ts 文件模块 请注意 打开后将无法监视.js 文件
      }),
      Components({
        // ui库解析器，也可以自定义
        resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-import.d.ts',
      }),
      createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
        libs: [
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
        less: {
          // 是否启用任意主题色模式，这里不启用
          arbitraryMode: false,
          // 提供多组变量文件
          multipleScopeVars: [
            {
              // 必需
              scopeName: 'theme-default',
              path: path.resolve('src/theme/default.less'),
            },
            {
              scopeName: 'theme-dark',
              path: path.resolve('src/theme/dark.less'),
            },
          ],
          extract: false,
        },
      }),
      // develop need theme HMR
      themePreprocessorHmrPlugin(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    optimizeDeps: {
      // 排除 browser-utils.js 在vite的缓存依赖
      exclude: ['@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'],
    },
    resolve: {
      alias: {
        '@/': resolve(__dirname, 'src'),
        '@/components': resolve(__dirname, 'src/components'),
        '@/routes': resolve(__dirname, 'src/routes'),
        '@/pages': resolve(__dirname, 'src/pages'),
        '@/utils': resolve(__dirname, 'src/utils'),
        '@/https': resolve(__dirname, 'src/https'),
        '@/store': resolve(__dirname, 'src/store'),
      },
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
})
