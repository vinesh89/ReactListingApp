import React from 'react';
import withTitleHeader from '../hoc/withTitleHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AccountsListingPage = React.lazy(() => {
    return import('../pages/AccountsListingPage');
  });

const TransactionListingPage = React.lazy(() => {
    return import('../pages/TransactionListingPage')
});

const TransactionDetailPage = React.lazy(() => {
    return import('../pages/TransactionDetailPage');
});

const RoutesRoot = () => {
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={withTitleHeader({component: AccountsListingPage, title: "Accounts"})} />
                <Route path="/transaction" component={withTitleHeader({component: TransactionListingPage, title: "Transactions"})} />
                <Route path="/transactionDetail/:id" exact component={withTitleHeader({component: TransactionDetailPage, title: "Transaction Detail"})} />
            </Switch>
        </Router>
    )
}

export default RoutesRoot;