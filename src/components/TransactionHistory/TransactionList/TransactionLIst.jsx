import {BodyTr, BodyTh} from '../TransactionList/TransactionList.styled';
import PropTypes from 'prop-types';

export const TransactionList = ({type, amount, currency}) => {
    return (
        <BodyTr>
            <BodyTh>{type}</BodyTh>
            <BodyTh>{amount}</BodyTh>
            <BodyTh>{currency}</BodyTh>
        </BodyTr>
    )
}

TransactionList.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

