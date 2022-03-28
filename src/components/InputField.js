import React from 'react';
import {TextInput } from 'react-native';

const InputField = (props) => {
  return (
    <TextInput
      {...props} 
      editable
      maxLength={40}
    />
  );
}
export default InputField;