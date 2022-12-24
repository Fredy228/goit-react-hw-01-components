import {Item, Status, Avatar, Name} from './FriendItem.styled';
import PropTypes from 'prop-types';

export const FriendItems = ({avatar, name, isOnline}) => {
    return ( 
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar}/>
            <Name>{name}</Name>
        </Item>
    )
}

FriendItems.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}