<template>
  <div class="flex w-full flex-col gap-2">
    <div>
      <h1 class="text-xl font-semibold">
        Setup App Keys
        <span class="text-sm font-normal text-black/50">Editable</span>
      </h1>

      <p class="text-sm">
        Input the test credentials here to initialize the payment form.
      </p>
    </div>

    <!-- public key -->
    <div class="flex flex-col gap-0">
      <form class="flex w-full gap-2">
        <label class="text-black/60" for="customer_first_name">
          Public Key
        </label>
        <input
          id="username"
          type="text"
          class="hidden w-0"
          name="dummy_username"
          autocomplete="username"
        />
        <input
          class="w-1/2 rounded border-none px-2 py-1 font-mono transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          type="password"
          id="app_publicKey"
          autocomplete="new-password"
          v-model="publicKey"
          required
        />
      </form>
      <p class="text-xs italic">
        Note: the payment form may still appear even when an invalid public key
        is provided, but it will not proceed with submitting the payment data to
        the server. Returns http 403.
      </p>
    </div>

    <!-- private key -->
    <div class="flex flex-col gap-0">
      <form class="flex w-full gap-2">
        <label class="text-black/60" for="customer_first_name">
          Private Key
        </label>
        <input
          id="username2"
          type="text"
          class="hidden w-0"
          name="dummy_username"
          autocomplete="username"
        />
        <input
          class="w-1/2 rounded border-none px-2 py-1 font-mono transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          type="password"
          id="app_privateKey"
          autocomplete="new-password"
          v-model="privateKey"
          required
        />
      </form>
      <p class="text-xs italic">
        In general, it is bad practice to expose private keys to the frontend.
        This is only for testing purposes.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const publicKey = useState(
    'publicKey',
    () => import.meta.env.VITE_NORBR_PUBLIC_KEY
  )

  const privateKey = useState('privateKey', () => process.env.NORBR_PRIVATE_KEY)
</script>
