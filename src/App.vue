<template>
  <a-config-provider :locale="store.locale === 'zh' ? zhCN : enUS">
    <Layout />
    <ThemeChange />
  </a-config-provider>
</template>

<script setup lang="ts">
import Layout from '@/pages/Layout/index.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { useLocale } from '@/store'
import ThemeChange from './components/themeChange.vue'
dayjs.locale('zh-cn')
const store = useLocale()
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
