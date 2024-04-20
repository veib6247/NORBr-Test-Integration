<template>
  <div>
    <h1 class="text-xl font-semibold">
      Shipping Details
      <span class="text-sm font-normal text-black/50">Editable</span>
    </h1>
  </div>

  <div class="flex flex-col gap-1">
    <div class="flex gap-1">
      <label
        class="w-1/3 text-black/60"
        for="shipping_address_street_name_line1"
      >
        Street Name
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="shipping_address_street_name_line1"
        v-model="shippingAddressStreetNameLine1"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="shipping_address_city">
        City
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="shipping_address_city"
        v-model="shippingAddressCity"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="shipping_address_zip_code">
        Zip Code
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="shipping_address_zip_code"
        v-model="shippingAddressZipCode"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="shipping_address_country">
        Country
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="shipping_address_country"
        v-model="shippingAddressCountry"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const shippingAddressStreetNameLine1 = useState(
    'shippingAddressStreetNameLine1'
  )
  const shippingAddressCity = useState('shippingAddressCity')
  const shippingAddressZipCode = useState('shippingAddressZipCode')
  const shippingAddressCountry = useState('shippingAddressCountry')
</script>

<style></style>
