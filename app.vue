<template>
  <div class="flex h-dvh flex-col divide-y-[1px] bg-slate-100">
    <AppNavBar />

    <NuxtPage />

    <footer class="h-5 bg-white"></footer>
  </div>
</template>

<script lang="ts" setup>
  useState<string>('appName', () => 'NORBr')
</script>
