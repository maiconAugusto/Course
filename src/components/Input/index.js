import React from 'react';
import {TextInput} from 'react-native-paper';

const Input = ({
  value,
  setValue,
  keyboardType,
  returnKeyType,
  label,
  style,
}) => {
  return (
    <TextInput
      type="outlined"
      label={label}
      style={style}
      value={value}
      onChangeText={(text) => setValue(text)}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
    />
  );
};
export default Input;
