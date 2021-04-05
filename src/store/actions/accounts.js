import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setAccounts = (accounts) => {
    return {
        type: actionTypes.SET_ACCOUNTS,
        accounts
    }
}

export const fetchAccountsFailed = (error) => {
    return {
        type: actionTypes.FETCH_ACCOUNTS_FAILED,
        error
    }
}

export const fetchAccounts = () => {
    return dispatch => {
        axios.get( 'accounts.json' )
            .then( response => {
               dispatch(setAccounts(response.data));
            } )
            .catch( error => {
                dispatch(fetchAccountsFailed(error));
            } );
    };
}

export const setTransactions = (transactions) => {
    return {
        type: actionTypes.SET_TRANSACTIONS,
        transactions
    }
}

export const fetchTransactionsFailed = (error) => {
    return {
        type: actionTypes.FETCH_TRANSACTIONS_FAILED,
        error
    }
}

export const fetchTransactions = (accountId) => {
    return dispatch => {
        axios.get(`transactions-${accountId}.json`)
            .then( response => {
                dispatch(setTransactions(response.data));
            })
            .catch((error) => {
                dispatch(fetchTransactionsFailed(error));               
            });
    };
}