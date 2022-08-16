<template >
    <a-layout-header class="header">
        <div class="nav">
            <div class="logo">
                <a-avatar class="avatar" src="https://joeschmoe.io/api/v1/random" />
            </div>
            <div class="left">
                <a-menu class="left-menu" v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal"
                    :style="{ lineHeight: '64px' }">
                    <a-menu-item v-for="route in NavRoutes" :key="route.name">{{
                            route.cname
                    }}</a-menu-item>
                </a-menu>
                <a-avatar class="avatar-login" src="https://joeschmoe.io/api/v1/random" />
            </div>
            <a-switch style="background-color: #ccc;" @change="changeTheme" v-model:checked="checked"
                checked-children="dark" un-checked-children="default" />
            <a-button @click="changeLang">{{ store.language }}</a-button>
        </div>
    </a-layout-header>
</template>
<script setup lang="ts">
import { NavRoutes } from '@/utils/route';
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import { useLocale } from '@/store';
const store = useLocale();
type Props = {
    selectedKeys: string[];
}
defineProps<Props>();
// 切换语言
const changeLang = () => {
    if (store.language === 'ENG') {
        store.changeLocale('zh')
    } else {
        store.changeLocale('en')
    }
}
const checked = ref<boolean>(false);
const changeTheme = (check: boolean) => {
    if (check) {
        toggleTheme({
            scopeName: "theme-dark",
        });
    } else {
        toggleTheme({
            scopeName: "theme-default",
        });
    }
}
</script>
<style lang="less" scoped>
.nav {
    display: flex;
    justify-content: space-between;

    .logo {
        .avatar {
            width: 50px;
            height: 50px;
        }
    }

    .left {
        display: flex;
        justify-content: space-between;

        &-menu {
            margin-right: 5%;
        }

        .avatar-login {
            margin-top: 14px;
        }
    }

}
</style>