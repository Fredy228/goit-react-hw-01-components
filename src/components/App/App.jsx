import {Container} from './App.styled'
import {Profile} from '../Profile/Profile'
import {Statistic} from '../Statistics/Statistics'

export const App = () => {
  return (
    <Container>
      <Profile/>
      <Statistic/>
    </Container>
  );
};
