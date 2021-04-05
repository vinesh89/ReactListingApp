import React from 'react';
import { List, ListItem } from '../UIComponents/list';

const AccountListing = (props) => {
    return(
        <List data-testid="accounts-list">
            {props.listItems.map((listItem) => 
                <ListItem data-testid="accounts-list-item" key={listItem.id} onClick={() => props.onClick(listItem)}>
                    <div>
                        <h2>{listItem.account_name}</h2>
                        <h3>Account Type - {listItem.account_type}</h3>
                        <h3>Balance - ${listItem.balance} {listItem.currency}</h3>
                        <h4>Account Status - {listItem.is_active ? "Active" : "InActive"}</h4>
                    </div>
                </ListItem>
            )}
        </List>    
    );
}

export default AccountListing;