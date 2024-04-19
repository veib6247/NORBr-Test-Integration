<template>
  <div class="flex h-dvh flex-col divide-y-[1px] bg-slate-100">
    <AppNavBar />

    <div class="responsive-height flex w-full flex-col gap-3">
      <!-- TITLE -->
      <div class="container mx-auto mt-3">
        <h1 class="text-xl font-semibold">Demo Checkout Page</h1>
        <p class="text-sm">
          This is a dummy checkout page using NORBr's
          <a
            href="https://developer.norbr.io/#hosted-elements"
            target="_blank"
            class="underline"
          >
            Hosted Elements integration
          </a>

          for payments.
        </p>
      </div>

      <!-- CONTENT -->
      <div class="container mx-auto flex gap-2">
        <!-- left: payment goes here -->
        <div class="w-2/3 rounded border border-gray-200 bg-white p-6">
          <div id="norbr-payment-container"></div>
        </div>

        <!-- right: some checkout data here -->
        <div
          class="flex w-1/3 flex-col gap-4 rounded border border-gray-200 bg-white p-6"
        >
          <h1 class="text-xl font-semibold">Purchase Details</h1>

          <div class="flex h-full flex-col gap-4">
            <div class="flex">
              <div class="flex w-2/3 flex-col">
                <h1>Dummy Item 1</h1>
                <p class="text-xs text-black/60">Quantity 1</p>
              </div>
              <div class="w-1/3">€ 1.99</div>
            </div>

            <div class="flex">
              <div class="flex w-2/3 flex-col">
                <h1>Sample Item 2</h1>
                <p class="text-xs text-black/60">Quantity 1</p>
              </div>
              <div class="w-1/3">€ 2.99</div>
            </div>

            <div class="flex">
              <div class="flex w-2/3 flex-col">
                <h1>Item 3</h1>
                <p class="text-xs text-black/60">Quantity 1</p>
              </div>
              <div class="w-1/3">€ 3.99</div>
            </div>
          </div>

          <div class="flex">
            <h1 class="w-2/3 text-xl font-semibold">Total</h1>
            <p class="w-1/3">€ 8.97</p>
          </div>
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
