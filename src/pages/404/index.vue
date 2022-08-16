<template>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
            <a-button type="primary" @click="backUpToHome">Back Home</a-button>
        </template>
    </a-result>
</template>
<script lang="ts" setup>
import router from '@/routes/index';
const backUpToHome = () => {
    router.push({
        name: 'main',
        path: '/'
    })
}
</script>
<style>
</style>