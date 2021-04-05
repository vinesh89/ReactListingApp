import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../store/actions/index';
import AccountList from '../components/accounts/AccountsListing';
import ErrorHandler from '../components/errorHandler/ErrorHandler';

const AccountsListingPage = (props) => {

    const dispatch = useDispatch();
    const accountsList = useSelector(state => state.accounts.accounts);
    const errorStatus = useSelector(state => state.accounts.error);
    const errorResponse = useSelector(state => state.accounts.errorResponse);
    const getAccountsList = useCallback(() => 
        dispatch(actions.fetchAccounts()), [dispatch]
    );

    useEffect(() => {
        getAccountsList();
    }, [getAccountsList]);

    const handleItemClick = (item) => {
        props.history.push({
            pathname: "/transaction",
            state: item
        });
    }

    let loadAccountsList = <h1>Loading Accounts List ...</h1>

    if(errorStatus) {
        loadAccountsList = (
            <ErrorHandler errorStatus={errorResponse.response.status} />
        )
    }

    if(accountsList) {
        loadAccountsList = (
            <AccountList listItems={accountsList} onClick={handleItemClick}/>
        );
    }

    return(
        <div>
            {loadAccountsList}
        </div>
    )
}

export default withRouter(AccountsListingPage);