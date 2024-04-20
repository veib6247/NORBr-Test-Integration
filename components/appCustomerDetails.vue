<template>
  <div>
    <h1 class="text-xl font-semibold">
      Customer Details
      <span class="text-sm font-normal text-black/50">Editable</span>
    </h1>
  </div>

  <div class="flex flex-col gap-1">
    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="customer_email">Email</label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="customer_email"
        v-model="customerEmail"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="customer_first_name">
        First Name
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="customer_first_name"
        v-model="customerFirstName"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="customer_last_name">
        Last Name
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="customer_last_name"
        v-model="customerLastName"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="customer_street_name">
        Street Address
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="customer_street_name"
        v-model="customerStreetName"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="customer_city">City</label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="customer_city"
        v-model="customerAddressCity"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="customer_zip_code">
        ZIP Code
      </label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="customer_zip_code"
        v-model="customerAddressZipCode"
      />
    </div>

    <div class="flex gap-1">
      <label class="w-1/3 text-black/60" for="customer_country">Country</label>
      <input
        class="w-2/3 rounded border-none px-2 py-1 transition focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        type="text"
        id="customer_country"
        v-model="customerAddressCountry"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const customerEmail = useState('customerEmail')
  const customerFirstName = useState('customerFirstName')
  const customerLastName = useState('customerLastName')
  const customerStreetName = useState('customerStreetName')
  const customerAddressCity = useState('customerAddressCity')
  const customerAddressZipCode = useState('customerAddressZipCode')
  const customerAddressCountry = useState('customerAddressCountry')
</script>

<style></style>
