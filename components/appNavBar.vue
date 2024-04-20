<template>
  <nav class="flex h-14 w-full bg-white">
    <h1 class="m-auto text-xl font-bold">{{ appName }}</h1>
  </nav>
</template>

<script lang="ts" setup>
  const appName = useState('appName')
</script>

<style></style>
