<template>
    <a-layout class="container">
        <div class="main-banner">
            <header class="header">
                <div class="nav">
                    <div class="logo">
                        <a-avatar class="avatar" src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <div class="left">
                        <a-menu class="left-menu" v-model:selectedKeys="selectedKeys" theme="light" mode="horizontal"
                            :style="{ lineHeight: '64px' }">
                            <a-menu-item class="menu-item" v-for="route in NavRoutes" :key="route.name">
                                <router-link :to="route.path">{{
                                        route.cname
                                }}</router-link>
                            </a-menu-item>
                        </a-menu>
                        <a-avatar class="avatar-login" src="https://joeschmoe.io/api/v1/random" />
                    </div>
                    <!-- <a-button @click="changeLang">{{ store.language }}</a-button> -->
                </div>
            </header>
            <section>
                <router-view></router-view>
            </section>
        </div>
    </a-layout>
    <!-- <router-view v-if="!loginState.isLogin"></router-view> -->
</template>
<script setup lang="ts">
import { NavRoutes } from '@/utils/route';
import { useLocale, useLoginState } from '@/store';
const store = useLocale();
type Props = {
    selectedKeys: string[];
}

const { selectedKeys } = toRefs(reactive<Props>({
    selectedKeys: ['1']
}))

// 切换语言
const changeLang = () => {
    if (store.language === 'ENG') {
        store.changeLocale('zh')
    } else {
        store.changeLocale('en')
    }
}
</script>
<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .main-banner {
        width: 100%;
        height: 100vh;
        background: url('../../assets/img/background.jpeg');
        background-color: rgba(0, 0, 0, .22);
        background-size: cover;
        background-position: center;
    }
}

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.nav {
    display: flex;
    justify-content: space-between;
    padding: 0px 32px;

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
            background-color: transparent;

            .menu-item .ant-menu-item-selected {
                background-color: transparent !important;
            }
        }

        .avatar-login {
            margin-top: 14px;
        }
    }
}
</style>
