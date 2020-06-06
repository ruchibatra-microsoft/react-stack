import React from 'react';
import {View, Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducers from './reducers'
import Header from './components/common/Header'
import LibraryList from './components/common/LibraryList'


const App=()=>{
  
  return( 
  <Provider store={createStore(reducers)}>
    <Header heading ="Tech-Stack" /> 
    
      <View style={{flex:1}}>
        <LibraryList/>
      </View>
    </Provider>
  )
}

export default App;