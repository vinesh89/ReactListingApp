import { render, screen, waitFor } from '@testing-library/react';
import AccountsListingPage from '../../pages/AccountsListingPage';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Accounts Listing Page', () => {
    const history = createMemoryHistory();
    const initialState = {accounts: {accounts: []}, error: false};
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    test('it renders Accounts page', async () => {
       const container = render(
            <Provider store={store}>
                <Router history={history}>
                    <AccountsListingPage />
                </Router>
            </Provider>
        );

        expect(container).toMatchSnapshot();
    });
});