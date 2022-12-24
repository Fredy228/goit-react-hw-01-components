import {Item, Status, Avatar, Name} from './FriendItem.styled';

export const FriendItems = ({avatar, name, isOnline}) => {
    return ( 
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar}/>
            <Name>{name}</Name>
        </Item>
    )
}