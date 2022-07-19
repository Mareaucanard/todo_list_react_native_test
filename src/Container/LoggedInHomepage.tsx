import { View } from 'react-native';

import HomepageHeader from '../Components/HomepageHeader';
import TodoList from '../Components/TodoList';
import Colors from '../Config/Colors';

function LoggedInHomePage() {
  return (
    <View style={{backgroundColor: Colors.background}}>
      <HomepageHeader />
      <TodoList/>
    </View>
  )
}

export default LoggedInHomePage
