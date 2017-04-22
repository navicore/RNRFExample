import React, { PropTypes }  from 'react'
import {
  View,
  Text,
} from 'react-native'

/* eslint-disable react/display-name */
export default ( props: {
  scene: PropTypes.object.isRequired,
}) => {
  const {scene} = props
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>You are currently on {scene && scene.sceneKey}</Text>
    </View>
  )
}
