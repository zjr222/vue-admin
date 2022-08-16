<template>
    <a-layout>
        <Header :selected-keys="data.selectedKeys"></Header>
        <a-layout>
            <Content></Content>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">
import Content from './Content.vue';
import Sider from './Sider.vue';
import Header from './Header.vue';
type Props = {
    selectedKeys: string[];
    collapsed: boolean;
    openKeys: string[];
}
const data = reactive<Props>({
    selectedKeys: ['1'],
    collapsed: false,
    openKeys: ['sub1'],
})
</script>
<style>
.site-layout-background {
    background: #fff;
}

.adjustment-height {
    min-height: 720px;
}
</style>
