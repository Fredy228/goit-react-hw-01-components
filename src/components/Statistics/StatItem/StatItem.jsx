import {Item, Label, Percentage} from '../StatItem/StatItem.styled';
import PropTypes from 'prop-types';

export const StatItem = ({label, percentage}) => {
    return (
        <Item data={label}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
        </Item> 
    )
}

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}