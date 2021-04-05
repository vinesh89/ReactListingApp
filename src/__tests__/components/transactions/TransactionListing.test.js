import { render, screen, waitFor } from '@testing-library/react';
import TransactionList from '../../../components/transactions/TransactionListing';

const transactionList = [{
    id:1,
    account_id:1,
    description:"savings",
    from:"Test Account",
    transaction_date:"2019-06-08T03:37:28 -08:00",
    transaction_processed:true,
    amount:"$10"
   }, {
    id:2,
    account_id:2,
    description:"testing",
    from:"Test Account 2",
    transaction_date:"2019-06-08T03:37:28 -08:00",
    transaction_processed:true,
    amount:"$100"
   }];

describe('Transaction List component', () => {
 test('it displays a list of transactions', async () => {
   render(<TransactionList listItems={transactionList}/>);
   const transactions = await waitFor(() => screen.getByTestId('transaction-list'));
   expect(transactions).toBeInTheDocument();
 });
});