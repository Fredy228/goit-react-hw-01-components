import {Profle, Description, Avatar, Name, Text, Stats, StatsItem, Label, Quantity} from './Profile.styled'
import user from './user.json';

export const Profile = () => {
    return (<Profle>
        <Description>
            <Avatar src={user.avatar}/>
            <Name>{user.username}</Name>
            <Text>{user.tag}</Text>
            <Text>{user.location}</Text>
        </Description>
        <Stats>
            {Object.keys(user.stats).map(item => {
                return (
                    <StatsItem>
                        <Label>{item}</Label>
                        <Quantity>{user.stats[item]}</Quantity>
                    </StatsItem>
                )
            })}
        </Stats>
    </Profle>)
}