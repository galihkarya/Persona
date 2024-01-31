import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../src/homePage';
import GroupListPage from '../src/logedIn/groupListPage';
import ProfilePage from '../src/logedIn/profilePage';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#CC3663',
        tabBarInactiveBackgroundColor: '#CC3663',
        tabBarActiveTintColor: '#FFFFFF', 
        
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Group" component={GroupListPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default Tabs;
