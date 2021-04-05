import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../store/actions/index';
import AccountList from '../components/accounts/AccountsListing';
import ErrorHandler from '../components/errorHandler/ErrorHandler';
import { getAccount, getAccountErrorStatus, getAccountErrorResponse } from '../store/selectors'

const AccountsListingPage = ({history, ...props}) => {

    const dispatch = useDispatch();
    const accountsList = useSelector(getAccount);
    const errorStatus = useSelector(getAccountErrorStatus);
    const errorResponse = useSelector(getAccountErrorResponse);
    const getAccountsList = useCallback(() => 
        dispatch(actions.fetchAccounts()), [dispatch]
    );

    useEffect(() => {
        getAccountsList();
    }, [getAccountsList]);

    const handleItemClick = (item) => {
        history.push({
            pathname: "/transaction",
            state: item
        });
    }

    const renderAccountsList = () => {
        if(errorStatus) {
            return(
                <ErrorHandler errorStatus={errorResponse.response.status} />
            )
        }

        if(accountsList) {
            return(
                <AccountList listItems={accountsList} onClick={handleItemClick}/>
            );
        }

        return <h1>Loading Accounts List ...</h1>
    }

    return(
        <>
            {renderAccountsList()}
        </>
    )
}

export default withRouter(AccountsListingPage);