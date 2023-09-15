import { Transaction } from '@/types/transaction';
import { createStore } from 'vuex';

export default createStore({
  state: {
    transactions: [] as Transaction[],
  },
  getters: {
    getTransactions(state) {
      return state.transactions.reduce((accumulator, currentTransaction) => {
        const date = currentTransaction.date as Date;
        const key = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        if (accumulator[key]) {
          accumulator[key].push(currentTransaction);
          return accumulator;
        }

        // eslint-disable-next-line no-param-reassign
        accumulator[key] = [currentTransaction];
        return accumulator;
      }, {} as Record<string, Transaction[]>);
    },
  },
  mutations: {
    setTransactions(state, transactions) {
      state.transactions = transactions;
    },
  },
  actions: {
    addTransaction({ state, commit }, transaction) {
      commit('setTransactions', [...state.transactions, { ...transaction, date: new Date() }]);
    },
  },
});
