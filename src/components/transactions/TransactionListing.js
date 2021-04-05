import React from 'react';
import { List, ListItem } from '../UIComponents/list';
import { getFormattedDate } from '../../utils/utility';

const TransactionListing = (props) => {
    return(
        <List data-testid="transaction-list">
            <h2>{props.listItems[0].from}</h2>
            {props.listItems.map((listItem) => 
                <ListItem data-testid="transaction-list-item" key={listItem.id} onClick={() => props.onClick(listItem)}>
                    <div>
                        <h3>Transaction Date</h3>
                        <h4>{getFormattedDate(listItem.transaction_date)}</h4>
                        <h3>Transaction Processed</h3>
                        <h4>{listItem.transaction_processed ? "Yes" : "No"}</h4>
                        <h3>Ammount</h3>
                        <h4>{listItem.amount}</h4>
                    </div>
                </ListItem>
            )}
        </List>    
    );
}

export default TransactionListing;