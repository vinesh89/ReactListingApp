import React from 'react';
import { ListItem } from '../components/UIComponents/list';
import { getFormattedDate } from '../utils/utility';

const TransactionDetailPage = (props) => {
    return(
        <ListItem>
            <h3>Description</h3>
            <h4>{props.location.state.description}</h4>
            <h3>Transaction Date</h3>
            <h4>{getFormattedDate(props.location.state.transaction_date)}</h4>
            <h3>Transaction Processed Status</h3>
            <h4>{props.location.state.transaction_processed}</h4>
            <h3>Amount</h3>
            <h4>{props.location.state.amount}</h4>
        </ListItem>
    )
}

export default TransactionDetailPage;