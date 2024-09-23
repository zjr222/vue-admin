export default {
  extends: [
    // collections
    'vue-global-api/reactivity',
    'vue-global-api/lifecycle',
    'vue-global-api/component',
    // single apis
    'vue-global-api/ref',
    'vue-global-api/toRef',
    'plugin:vue/essential', // Vue 基本规则
    'eslint:recommended', // ESLint 推荐规则
    '@vue/prettier', // Prettier 集成
    '@vue/typescript/recommended', // 如果使用 TypeScript
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential', // Vue 基本规则
    'eslint:recommended', // ESLint 推荐规则
    '@vue/prettier', // Prettier 集成
    '@vue/typescript/recommended', // 如果使用 TypeScript
  ],
  parser: 'vue-eslint-parser', // 解析 Vue 文件
  parserOptions: {
    ecmaVersion: 2021, // 支持最新的 ECMAScript 版本
    sourceType: 'module', // 使用模块
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
    parser: '@typescript-eslint/parser', // 如果使用 TypeScript
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // 启用 Prettier 规则
    'no-console': 'warn', // 禁用 console.log
    quotes: ['error', 'single'], // 强制使用单引号
    'no-unused-vars': 'error', // 禁止未使用的变量
    'vue/no-multiple-template-root': 'off', // 允许多个根元素
    'vue/multi-word-component-names': 'off', // 允许组件名称为单个单词
    'vue/script-setup-uses-vars': 'error', // 检查 <script setup> 中的变量是否被使用
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
}
