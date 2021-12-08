import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import TodoAction from '../modules/actions/TodoAction';

const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  const {deleteTodo, checkTodo, unCheckTodo} = TodoAction;
  const todos = useSelector(store => store.TodoReducer);

  const handleDeleteTodo = id => {
    const filteredTodo = todos.filter(el => el.id !== id);
    dispatch(deleteTodo(filteredTodo));
  };

  const handleCheckTodo = id => {
    const filteredTodo = todos.map(el =>
      el.id == id ? {...el, checked: true} : el,
    );
    dispatch(checkTodo(filteredTodo));
  };

  console.log(todos);

  return (
    <View
      style={{
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#bdbdbd',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
      }}>
      <TouchableOpacity
        onPress={() => handleCheckTodo(todo.id)}
        style={{
          width: 20,
          height: 20,
          borderRadius: 100,
          borderColor: '#bdbdbd',
          borderWidth: 1,
          marginRight: 10,
        }}
      />
      <Text>{todo.content}</Text>
      <TouchableOpacity
        onPress={() => {
          handleDeleteTodo(todo.id);
        }}
        style={{
          width: 20,
          height: 20,
          position: 'absolute',
          right: 0,
        }}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const {deleteTodo} = TodoAction;
