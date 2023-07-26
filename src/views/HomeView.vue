<script lang="ts" setup>
import { Header, TransactionCreator, TransactionList } from '@/components';
</script>

<template>
  <main class="app-main">
    <Header />
    <TransactionCreator />
    <TransactionList />
  </main>
</template>

<style lang="scss" scoped>
.app-main {
  background-color: #282236;
  min-height: 100vh;
}
</style>
