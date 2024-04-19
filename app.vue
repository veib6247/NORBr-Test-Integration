<template>
  <div class="flex h-dvh flex-col divide-y-[1px]">
    <AppNavBar />

    <!-- main content -->
    <div class="responsive-height w-full bg-slate-100">
      <div class="container mx-auto flex gap-2">
        <!-- left: payment goes here -->
        <div class="w-2/3">
          <div id="norbr-payment-container"></div>
        </div>

        <!-- right: some checkout data here -->
        <div class="w-1/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            voluptatum voluptate. Numquam minus hic quod aspernatur qui rem
            laboriosam molestias, possimus aut totam ea ab eum sapiente
            doloremque neque quia.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const appName = useState('appName', () => 'NORBr | Test Integration')

  useHead({
    title: appName,
  })

  //
  onMounted(() => {
    const configuration = {
      publicapikey: import.meta.env.VITE_NORBR_PUBLIC_KEY,
      locale: 'en',
      environment: 'sandbox',
      tokentype: 'oneshot',
      paymentmethods: JSON.stringify(myPaymentMethods),
      displayButtons: true,
      displayCardHolder: true,
      displaySave: false,
      onSubmit: () => {
        // TODO: send norbr.token to server to process order
        console.info(norbr)
      },
    }

    const norbr = new Norbr(configuration)
  })
</script>

<style>
  .responsive-height {
    height: calc(100dvh - 56px);
  }
</style>
