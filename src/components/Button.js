import React from 'react';
import {Text, Pressable } from 'react-native';

const Button=(props)=>{

  const {styleBtn,styleText,title,onPress}=props

return(
  <Pressable style={styleBtn} onPress={onPress}>
  <Text style={styleText}>{title}</Text>
</Pressable>
)
}


export default Button