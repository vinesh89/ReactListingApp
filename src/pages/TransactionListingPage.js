import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import TransactionList from '../components/transactions/TransactionListing';
import ErrorHandler from '../components/errorHandler/ErrorHandler';
import { getTransactions, getTransactionsErrorStatus, getTransactionsErrorResponse } from '../store/selectors';

const TransactionListingPage = (props) => {
    const dispatch = useDispatch();
    const transactionsList = useSelector(getTransactions);
    const errorStatus = useSelector(getTransactionsErrorStatus);
    const errorResponse = useSelector(getTransactionsErrorResponse);
    const getTransactionsList = useCallback((id) => 
        dispatch(actions.fetchTransactions(id)), [dispatch]
    );

    useEffect(() => {
        const { id } = props.location.state;
        getTransactionsList(id);
    }, [getTransactionsList]);

    const handleItemClick = (item) => {
        props.history.push({
            pathname: `/transactionDetail/${item.id}`,
            state: item
        })
    }

    let transactions = <h1>Loading Transactions ...</h1>;

    if(errorStatus) {
        transactions = (
            <ErrorHandler errorStatus={errorResponse.response.status} />
        )
    }

    if (transactionsList) {
        transactions = <TransactionList listItems={transactionsList} onClick={handleItemClick}/>
    }

    return(
        <div>
            {transactions}
        </div>
    )
}

export default withRouter(TransactionListingPage);