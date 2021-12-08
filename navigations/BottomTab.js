import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
