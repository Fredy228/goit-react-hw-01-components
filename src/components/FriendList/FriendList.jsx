import {FriendList, Item, Status, Avatar, Name} from './FriendList.styled';
import friends from './friends.json'

export const Friend = () => {
    return (
        <FriendList>
            {friends.map(item => {
                return (
                    <Item>
                        <Status isOnline={item.isOnline}></Status>
                        <Avatar src={item.avatar}/>
                        <Name>{item.name}</Name>
                    </Item>
                )
            })}
        </FriendList>
    );
}