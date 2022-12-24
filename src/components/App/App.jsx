import {Container} from './App.styled';
import {Profile} from '../Profile/Profile';
import {Statistic} from '../Statistics/Statistics';
import {Friends} from '../Friend/FriendList/FriendList';
import {TransactionHistory} from '../TransactionHistory/TransactionHistory';

import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../Friend/friends.json';

export const App = () => {
  return (
    <Container>
      <Profile 
      username={user.username} 
      avatar={user.avatar} 
      tag={user.tag} 
      location={user.location} 
      stats={user.stats}/>

      <Statistic data={data}/>

      <Friends friends={friends}/>

      <TransactionHistory/>
    </Container>
  );
};
