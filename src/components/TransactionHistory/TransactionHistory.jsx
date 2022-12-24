import {TransactionHistoryBox, Thead, Tbody, HeadTr, HeadTh, BodyTr, BodyTh} from './TransactionHistory.styled';
import transactions from './transactions.json'

export const TransactionHistory = () => {
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
                {transactions.map(item => {
                    return (
                        <BodyTr key={item.id}>
                            <BodyTh>{item.type}</BodyTh>
                            <BodyTh>{item.amount}</BodyTh>
                            <BodyTh>{item.currency}</BodyTh>
                        </BodyTr>
                    )
                })}
            </Tbody>
        </TransactionHistoryBox>
    )
}