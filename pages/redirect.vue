<template>
  <div class="responsive-height flex w-full flex-col gap-4 overflow-auto py-5">
    <div class="container mx-auto flex flex-col gap-4">
      <AppNotification>
        This is a placeholder redirect page. Please log on to the gateway
        interface to check the actual transaction results.
      </AppNotification>

      <div>
        <NuxtLink
          to="/"
          class="rounded bg-amber-300 px-4 py-2 text-amber-900 transition hover:bg-amber-400"
        >
          Back to Integration
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const appName = useState<string>('appName')

  useHead({
    title: `${appName.value} | Redirect Page`,
  })
</script>

<style></style>
