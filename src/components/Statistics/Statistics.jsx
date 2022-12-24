import {Statistics, Title, StatList, Item, Label, Percentage} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistic = ({data}) => {
    return (
        <Statistics>
            {true && (<Title>Upload stats</Title>)}
            <StatList>
                {data.map(({id, label, percentage}) => {
                    return (
                       <Item data={label} key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                       </Item> 
                    )
                })}
            </StatList>
        </Statistics>
    )
}

Statistic.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}