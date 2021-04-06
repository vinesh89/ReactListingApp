import React from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ListItem } from '../components/UIComponents/list';
import { getFormattedDate } from '../utils/utility';
import { getTransactionItemByID } from '../store/selectors';


const TransactionDetailPage = () => {
    const { id } = useParams();
    const {description, transaction_date, transaction_processed, amount} = useSelector(getTransactionItemByID(id));
    
    return(
        <ListItem>
            <h3>Description</h3>
            <h4>{description}</h4>
            <h3>Transaction Date</h3>
            <h4>{getFormattedDate(transaction_date)}</h4>
            <h3>Transaction Processed Status</h3>
            <h4>{transaction_processed ? "Yes" : "No"}</h4>
            <h3>Amount</h3>
            <h4>{amount}</h4>
        </ListItem>
    )
}

export default TransactionDetailPage;