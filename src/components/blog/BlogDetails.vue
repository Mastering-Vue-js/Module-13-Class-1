<script setup>
import { useRouter, useRoute } from "vue-router";

// const router = useRouter();
// router.push("/blog/single/1");

const route = useRoute();
console.log(route);

</script>

<template>
    <h1>This is Blog Details: {{ route.params.blog_id }}</h1>
</template>

<style scoped>
</style>