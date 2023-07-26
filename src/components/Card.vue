<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { Transaction, TransactionIcon, TransactionType } from '@/types/transaction';

const props = defineProps<{ transaction: Transaction }>();

const icon = computed(() => TransactionIcon[props.transaction.type ?? TransactionType.PAYMENT]);
</script>

<template>
  <div class="app-transaction-card app-justify-between app-align-center">
    <div class="app-transaction-card__icon app-justify-center app-align-center">
      <img :src="icon" alt="" />
    </div>
    <div class="app-justify-column app-transaction-card__info">
      <span class="app-transaction-card__info__id">#{{ props.transaction.id }}</span>
      <span class="app-transaction-card__info__text">{{ props.transaction.title }}</span>
    </div>
    <span class="app-transaction-card__value">{{
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: props.transaction.currency,
      }).format(props.transaction.value)
    }}</span>
  </div>
</template>

<style lang="scss">
.app-transaction-card {
  width: 400px;
  height: 120px;
  background-color: var(--app-color-primary-900);
  border-radius: 8px;
  padding: 20px;

  .app-transaction-card__icon {
    width: 70px;
    height: 70px;
    background-color: var(--app-color-background-400);
    border-radius: 50%;
  }

  .app-transaction-card__info {
    display: flex;
    flex-direction: column;

    .app-transaction-card__info__id {
      color: var(--app-color-primary-700);
      font-size: 10px;
    }
  }
}
</style>
