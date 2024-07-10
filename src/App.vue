<template>
  <h1>v-for columns work</h1>
  <PVDataTable
    :value="[
      { name: 'Vite', version: '2.6.0' },
      { name: 'Vue', version: '3.2.29' },
    ]"
  >
    <PVColumn
      v-for="col of [
        { field: 'name', label: 'Name' },
        { field: 'version', label: 'Version' },
      ]"
      :field="col.field"
      :label="col.label"
    ></PVColumn>
  </PVDataTable>
  <h1>explicit columns work</h1>
  <PVDataTable
    :value="[
      { name: 'Vite', version: '2.6.0' },
      { name: 'Vue', version: '3.2.29' },
    ]"
  >
    <PVColumn field="name" label="Name"></PVColumn>
    <PVColumn field="version" label="Version"></PVColumn>
  </PVDataTable>
</template>
