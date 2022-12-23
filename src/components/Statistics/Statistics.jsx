import {Statistics, Title, StatList, Item, Label, Percentage} from './Statistics.styled';
import data from './data.json';

export const Statistic = () => {
    return (
        <Statistics>
            {true && (<Title>Upload stats</Title>)}
            <StatList>
                {data.map(item => {
                    return (
                       <Item data={item.label}>
                        <Label>{item.label}</Label>
                        <Percentage>{item.percentage}%</Percentage>
                       </Item> 
                    )
                })}
            </StatList>
        </Statistics>
    )
}