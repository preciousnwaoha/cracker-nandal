import React, {useEffect} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PAGE from '../constants/page.constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';

// import Loading from '../components/ui/Loading/loading.component';

const RootStack = createNativeStackNavigator(); 
const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={PAGE.HOME.screen}
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null ,
        tabBarLabelStyle: {
          fontSize: 18, fontWeight: 'bold'
        },
         }}

    >
      <Tab.Screen
        
        name={PAGE.HOME.screen}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );

}


const Navigation = () => {

  return (
    <>
      <RootStack.Navigator
        initialRouteName={PAGE.HOME.screen}
        screenOptions={{
            headerShown: false,
        }}
      >
        <HomeStack.Screen
          name={PAGE.HOME.screen}
          component={HomeScreen}
        />


        <HomeStack.Screen
          name={PAGE.EXPLORE.screen}
          component={ExploreScreen}
        />

        <HomeStack.Screen
          name={PAGE.PROFILE.screen}
          component={ProfileScreen}
        />




      </RootStack.Navigator>
    </>
  );
};

export default Navigation;
