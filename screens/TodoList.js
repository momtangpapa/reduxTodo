import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import TodoItem from './TodoItem';
import TodoAction from '../modules/actions/TodoAction';

const Home = () => {
  const todos = useSelector(store => store.TodoReducer);

  return (
    <View style={{position: 'relative', flex: 1, paddingHorizontal: 16}}>
      {todos.map(todo => {
        return <TodoItem todo={todo} />;
      })}
    </View>
  );
};

export default Home;
