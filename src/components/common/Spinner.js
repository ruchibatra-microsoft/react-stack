import React from 'react'
import {View,ActivityIndicator} from 'react-native'

const Spinner =({size})=>{
  return (
    <View style={styles.spinnerStyles}>
      <ActivityIndicator size={size || 'large'}/>
    </View>
  )
}

const styles={
  spinnerStyle:{
    flex:1,
    justifyContents: 'center',
    alignItems:'center'
  }
}

export default Spinner