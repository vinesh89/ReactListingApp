import { render, screen, waitFor } from '@testing-library/react';
import AccountList from '../../../components/accounts/AccountsListing';

const accountsList = [{
    id:1,
    account_name:"Savings Account",
    account_type:"savings",
    balance:32334.32,
    currency:"SGD",
    account_number:"342423455344",
    is_active:true
   }, {
    id:2,
    account_name:"Test Account",
    account_type:"TEST",
    balance:32334.32,
    currency:"SGD",
    account_number:"342423425334",
    is_active:true
   }];

describe('Account List component', () => {
 test('it displays a list of accounts', async () => {
   render(<AccountList listItems={accountsList}/>);
   const accounts = await waitFor(() => screen.getByTestId('accounts-list'));
   expect(accounts).toBeInTheDocument();
 });
});