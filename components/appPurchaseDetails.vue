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
    <div class="w-2/3">
      <h1 class="text-xl font-semibold">
        Total
        <span class="text-sm font-normal text-black/50">Editable</span>
      </h1>
    </div>

    <div class="flex w-1/3">
      <label for="trx_total_amount">€</label>
      <input
        class="w-3/4 rounded border-none px-2 py-1 italic transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="number"
        id="trx_total_amount"
        v-model="trxTotalAmount"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const trxTotalAmount = useState('trxTotalAmount')
</script>

<style></style>
