import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {add} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import TodoAction from '../modules/actions/TodoAction';

const Home = () => {
  const data = useSelector(store => store.TodoReducer);
  const {addTodo} = TodoAction;
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = text => {
    dispatch(addTodo({content: text, id: Math.random()}));
  };

  return (
    <View style={{position: 'relative'}}>
      <TextInput
        onChangeText={t => setInputValue(t)}
        style={{borderBottomWidth: 1, height: 40, paddingLeft: 7}}
      />
      <TouchableOpacity
        onPress={() => handleAddTodo(inputValue)}
        style={{
          position: 'absolute',
          right: 10,
          top: 6,
          backgroundColor: '#bdbdbd',
          padding: 5,
        }}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
