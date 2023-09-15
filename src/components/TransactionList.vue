<script lang="ts" setup>
import { computed } from 'vue';
import store from '@/store';
import { Transaction } from '@/types/transaction';
import Card from './Card.vue';

const transactionsByDate = computed(() => store.getters.getTransactions);
</script>

<template>
  <div class="app-transaction-list app-justify-center">
    <div class="app-justify-row">
      <img src="../assets/layer_icon.svg" alt="icon transaction" />
      <h1 class="app-ml-1">Últimas transações</h1>
    </div>
    <div v-for="[date, transactions] in Object.entries(transactionsByDate)" :key="date">
      <h3 class="app-mt-3 app-mb-3">{{ date }}</h3>
      <div class="app-transaction-list__cards app-align-center">
        <Card
          v-for="transaction in (transactions as Transaction[])"
          :key="transaction.id"
          :transaction="transaction"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-transaction-list {
  width: 1024px;
  margin: 0 auto;
  margin-top: 60px;

  .app-transaction-list__cards {
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
