import { render, screen } from '@testing-library/react';
import TransactionDetailPage from '../../pages/TransactionDetailPage';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

describe('Transaction Detail Page', () => {
    const history = createMemoryHistory();
    const location = {state: {
        description: "Test",
        account_id: 1,
        from: "Test Account",
        transaction_date: "2019-06-08T03:37:28 -08:00",
        transaction_processed: true,
        amount: "$10"
    }};
    const initialState = {};
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    test('it renders Transaction Detail Page', () => {
        render(
            <Provider store={store}>
                <Router history={history}>
                    <TransactionDetailPage location={location}/>
                </Router>
            </Provider>
        );

        expect(screen.getByText(/Transaction Date/i)).toBeInTheDocument();
    });
   });