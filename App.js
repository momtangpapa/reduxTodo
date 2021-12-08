import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home from './screens/Home';
import rootReducer from './modules/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
