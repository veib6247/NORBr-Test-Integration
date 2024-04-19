<template>
  <div class="flex h-dvh flex-col divide-y-[1px] bg-slate-100">
    <AppNavBar />

    <div class="responsive-height flex w-full flex-col gap-4">
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
      <div class="container mx-auto flex gap-4">
        <!-- left: payment goes here -->
        <div class="w-2/3 rounded border border-gray-200 bg-white p-6">
          <p class="text-sm italic">
            *The payment form below is intentionally unstyled to show the
            default look.
          </p>
          <div id="norbr-payment-container"></div>

          <div class="mt-4 flex flex-col gap-1" v-if="isAwaitingServer">
            <div class="h-4 animate-pulse rounded-lg bg-gray-300"></div>
            <div class="h-4 animate-pulse rounded-lg bg-gray-300"></div>
            <div class="h-4 animate-pulse rounded-lg bg-gray-300"></div>
          </div>

          <!-- response data here... -->
          <textarea
            class="h-96 w-full"
            v-model="trxResult"
            v-if="trxResult"
            readonly
          >
          </textarea>
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
  import axios from 'axios'
  const appName = useState('appName', () => 'NORBr | Test Integration')
  const isAwaitingServer = ref(false)
  const trxResult = ref('')

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
      onSubmit: async () => {
        console.info('Generating payment token...')
        console.info(norbr)

        isAwaitingServer.value = true
        // send token to server for checkout and order processing
        try {
          const res = await axios.post('/api/submitPayment', {
            token: norbr.token,
            paymentMethodName: norbr.paymentMethodName,
          })

          trxResult.value = JSON.stringify(res.data, undefined, 4)

          //
        } catch (error) {
          console.error(error)

          //
        } finally {
          isAwaitingServer.value = false
        }
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
