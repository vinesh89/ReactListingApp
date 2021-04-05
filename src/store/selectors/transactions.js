export const getTransactions = state => state.accounts.transactions;

export const getTransactionItemByID = (id) => (state) => state.accounts.transactions.filter(item => item.id === id)[0];

export const getTransactionsErrorStatus = state => state.accounts.error;

export const getTransactionsErrorResponse = state => state.accounts.errorResponse;