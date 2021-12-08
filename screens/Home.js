import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../modules/actions/getUser';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AddTodo />
      <TodoList />
    </SafeAreaView>
  );
};

export default Home;
