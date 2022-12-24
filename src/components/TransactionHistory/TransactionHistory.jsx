import {TransactionHistoryBox, Thead, Tbody, HeadTr, HeadTh} from './TransactionHistory.styled';
import {TransactionList} from './TransactionList/TransactionLIst';
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
    return (
        <TransactionHistoryBox>
            <Thead>
                <HeadTr>
                    <HeadTh>Type</HeadTh>
                    <HeadTh>Amount</HeadTh>
                    <HeadTh>Currency</HeadTh>
                </HeadTr>
            </Thead>
            <Tbody>
                {transactions.map(({id, type, amount, currency}) => {
                    return (
                        <TransactionList key={id} type={type} amount={amount} currency={currency}/>
                    )
                })}
            </Tbody>
        </TransactionHistoryBox>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired
}