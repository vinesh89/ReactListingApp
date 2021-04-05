import { render } from '@testing-library/react';
import TransactionListingPage from '../../pages/TransactionListingPage';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

describe('Transaction Listing Page', () => {
    const history = createMemoryHistory();
    history.push('/transaction', {id: 1});
    const initialState = {
        accounts: {
            transactions: [{
                description: "Test",
                account_id: 1,
                id: 1,
                from: "Test Account",
                transaction_date: "2019-06-08T03:37:28 -08:00",
                transaction_processed: true,
                amount: "$10"
            }]
        }, 
        error: false
    };
    
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    test('it renders Transactions page', async () => {
        const container = render(
            <Provider store={store}>
                <Router history={history}>
                    <TransactionListingPage />
                </Router>
            </Provider>
        );

       expect(container).toMatchSnapshot();
    });
   });