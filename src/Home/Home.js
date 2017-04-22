import React, { PropTypes }  from 'react'
import {
  View,
  Text,
} from 'react-native'

/* eslint-disable react/display-name */
export default (props:{
  count: PropTypes.number.isRequired,
  scene: PropTypes.object.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  incrementCountThunk: PropTypes.func.isRequired,
  handleCard: PropTypes.func.isRequired,
}) => {
  const {count, scene, incrementCount, decrementCount, incrementCountThunk, handleCard} = props
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>You are currently on {scene && scene.sceneKey}</Text>
      <Text>Count: {count}</Text>
      <Text onPress={()=>incrementCount()}>Increment Count</Text>
      <Text onPress={()=>incrementCountThunk()}>Increment Count Thunk</Text>
      <Text onPress={()=>decrementCount()}>Decrement Count</Text>

      <Text onPress={()=>handleCard()}>Push New Card Scene</Text>
    </View>
  )
}
