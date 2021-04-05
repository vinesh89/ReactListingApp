import { render, screen } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Testing App Component', () => {
    test('It Renders', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <App/>
            </Router>
        );

        expect(screen.getByText(/Accounts/i)).toBeInTheDocument()
    });
})