import * as actionTypes from '../actions/actionTypes';
import { updateStateObject } from '../../utils/utility';

const setAccounts = (state, action) => {
    return updateStateObject(state, {accounts: action.accounts, error: false});
}

const fetchAccountsFailed = (state, action) => {
    return updateStateObject(state, {error: true, errorResponse: action.error});
}

const setTransactions = (state, action) => {
    return updateStateObject(state, {transactions: action.transactions, error: false});
}

const fetchTransactionsFailed = (state, action) => {
    return updateStateObject(state, {error: true, errorResponse: action.error});
}

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SET_ACCOUNTS: return setAccounts(state, action);
        case actionTypes.FETCH_ACCOUNTS_FAILED: return fetchAccountsFailed(state, action);
        case actionTypes.SET_TRANSACTIONS: return setTransactions(state, action);
        case actionTypes.FETCH_TRANSACTIONS_FAILED: return fetchTransactionsFailed(state, action);
        default: return state;
    }
}

export default reducer;