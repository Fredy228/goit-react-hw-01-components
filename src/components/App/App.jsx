import {Container} from './App.styled'
import {Profile} from '../Profile/Profile'
import {Statistic} from '../Statistics/Statistics'
import {Friend} from '../FriendList/FriendList'

export const App = () => {
  return (
    <Container>
      <Profile/>
      <Statistic/>
      <Friend/>
    </Container>
  );
};
