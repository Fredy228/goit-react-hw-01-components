import {Statistics, Title, StatList} from '../StatList/Statistics.styled';
import {StatItem} from '../StatItem/StatItem'
import PropTypes from 'prop-types';

export const Statistic = ({data, title}) => {
    return (
        <Statistics>
            {title && (<Title>{title}</Title>)}
            <StatList>
                {data.map(({id, label, percentage}) => {
                    return (
                       <StatItem key={id} label={label} percentage={percentage}/>
                    )
                })}
            </StatList>
        </Statistics>
    )
}

Statistic.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}