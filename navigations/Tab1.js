import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Tab1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Tab1;
