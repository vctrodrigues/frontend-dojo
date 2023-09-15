<script lang="ts" setup>
import { ref } from 'vue';
import store from '@/store';
import { Transaction, TransactionType } from '@/types/transaction';

import TransactionButton from './TransactionButton.vue';

const transaction = ref<Transaction>({
  title: '',
  currency: '',
  value: 0,
  id: 0,
  date: undefined,
});

function onSelectType(_type: TransactionType) {
  transaction.value.type = _type;
}

function onClear() {
  transaction.value = {
    title: '',
    currency: '',
    value: 0,
    id: 0,
  };
}

function addTransaction() {
  store.dispatch('addTransaction', transaction.value);
  onClear();
}

const types: TransactionType[] = [
  TransactionType.PAYMENT,
  TransactionType.RECEIVE,
  TransactionType.TRANSFERENCY,
];
</script>

<template>
  <div class="app-transaction-creator app-mt-5">
    <h2 class="app-transaction-creator__title">
      <img src="../assets/money_icon.svg" alt="" /> Adicionar transação
    </h2>
    <div class="app-transaction-creator__buttons app-align-center app-mt-3">
      <TransactionButton
        v-for="buttonType in types"
        :key="buttonType"
        :type="buttonType"
        @select:type="onSelectType"
      />
      <form action="" method="" class="app-transaction-creator__form">
        <input class="app-input" placeholder="Título" v-model="transaction.title" />
        <input class="app-input" placeholder="BRL" v-model="transaction.currency" />
        <input class="app-input" placeholder="Valor" v-model="transaction.value" />
        <button type="button" class="app-button" @click="addTransaction">Adicionar</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.app-transaction-creator {
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
}

.app-transaction-creator__buttons {
  display: flex;
  gap: 30px;
}

.app-transaction-creator__form {
  display: flex;
  gap: 10px;
}
</style>
