<template>
  <h1 class="text-xl font-semibold">Purchase Details</h1>

  <div class="flex h-full flex-col gap-2">
    <div class="flex">
      <div class="flex w-2/3 flex-col">
        <h1>Dummy Item 1</h1>
        <p class="text-xs text-black/60">Quantity 1</p>
      </div>
      <div class="w-1/3 italic">€ 1.99</div>
    </div>

    <div class="flex">
      <div class="flex w-2/3 flex-col">
        <h1>Sample Item 2</h1>
        <p class="text-xs text-black/60">Quantity 1</p>
      </div>
      <div class="w-1/3 italic">€ 2.99</div>
    </div>

    <div class="flex">
      <div class="flex w-2/3 flex-col">
        <h1>Item 3</h1>
        <p class="text-xs text-black/60">Quantity 1</p>
      </div>
      <div class="w-1/3 italic">€ 3.99</div>
    </div>
  </div>

  <div class="flex">
    <h1 class="w-2/3 text-xl font-semibold">Total</h1>
    <div class="flex">
      <input class="w-1/3 border-none focus:ring-0" type="number" value="€" />
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="shipping_address_country"
        v-model="trxTotalAmount"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const trxTotalAmount = useState('trxTotalAmount')
</script>

<style></style>
