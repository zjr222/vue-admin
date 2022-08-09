<template>
    <a-layout>
        <Header :selected-keys1="data.selectedKeys1"></Header>
        <a-layout>
            <Sider :selected-keys2="data.selectedKeys2" :open-keys="data.openKeys"></Sider>
            <Content></Content>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">
import Content from './Content.vue';
import Sider from './Sider.vue';
import Header from './Header.vue';
type Props = {
    selectedKeys1: string[];
    selectedKeys2: string[];
    collapsed: boolean;
    openKeys: string[];
}
const data = reactive<Props>({
    selectedKeys1: ['2'],
    selectedKeys2: ['1'],
    collapsed: false,
    openKeys: ['sub1'],
})
</script>
<style>
.site-layout-background {
    background: #fff;
}
</style>
