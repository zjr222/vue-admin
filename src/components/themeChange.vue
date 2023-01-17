<template>
    <div class="theme">
        <a-switch v-model:checked="checked" @change="changeTheme">
            <template #checkedChildren>
                <bulb-outlined />
            </template>
        </a-switch>
    </div>
</template>
<script setup lang="ts">
import { BulbOutlined } from '@ant-design/icons-vue';
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import { ConfigProvider, message } from 'ant-design-vue';
// ConfigProvider.config({
//     theme: {
//         primaryColor: '#25b864',
//         infoColor: 'blue',
//     },
// });
const checked = ref(false);
const changeTheme = (check: boolean) => {
    message.info("切换主题色！")
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
<style lang="less">
.theme {
    position: fixed;
    left: 3%;
    bottom: 5%;
    z-index: 9999;
    color: #fff;
}
</style>