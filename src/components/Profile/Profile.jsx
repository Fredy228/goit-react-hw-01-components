import {ProfileBox, Description, Avatar, Name, Text, Stats, StatsItem, Label, Quantity} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({username, avatar, tag, location, stats}) => {
    return (
    <ProfileBox>
        <Description>
            <Avatar src={avatar}/>
            <Name>{username}</Name>
            <Text>{tag}</Text>
            <Text>{location}</Text>
        </Description>
        <Stats>
            {Object.keys(stats).map(item => {
                return (
                    <StatsItem>
                        <Label>{item}</Label>
                        <Quantity>{stats[item]}</Quantity>
                    </StatsItem>
                )
            })}
        </Stats>
    </ProfileBox>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}




