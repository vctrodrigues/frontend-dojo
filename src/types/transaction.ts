// eslint-disable-next-line no-shadow
export enum TransactionType {
  PAYMENT = 'PAYMENT',
  RECEIVE = 'RECEIVE',
  TRANSFERENCY = 'TRANSFERENCY',
}

// eslint-disable-next-line no-shadow
export enum TransactionIcon {
  PAYMENT = '/assets/money_button.svg',
  RECEIVE = '/assets/revenue_button.svg',
  TRANSFERENCY = '/assets/transfer_button.svg',
}

export interface Transaction {
  type?: TransactionType;
  title: string;
  currency: string;
  value: number;
  id: number;
  date?: Date;
}
