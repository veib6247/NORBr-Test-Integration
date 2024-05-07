<template>
  <h1 class="text-xl font-semibold">Transaction Details (Internal)</h1>

  <div class="flex flex-col gap-1 text-sm">
    <label for="operationTypes"> Operation Type </label>
    <select v-model="selectedOperationType" id="operationTypes">
      <option v-for="(item, index) in operationTypes" :key="index">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
  const operationTypes = ref(['authorize', 'direct_capture'])

  // sets 'direct_capture' as the default selected value on the list
  const selectedOperationType = useState(
    'operationType',
    () => operationTypes.value[1]
  )
</script>
