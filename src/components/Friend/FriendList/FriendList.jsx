import {FriendList} from './FriendList.styled';
import PropTypes from 'prop-types';
import {FriendItems} from '../FriendItem/FriendItem'

export const Friends = ({friends}) => {
    return (
        <FriendList>
            {friends.map(({id, avatar, name, isOnline}) => {
                return (
                    <FriendItems key={id} avatar={avatar} 
                    name={name} 
                    isOnline={isOnline}
                    id={id}/>
                )
            })}
        </FriendList>
    );
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}