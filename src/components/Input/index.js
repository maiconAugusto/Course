import React from 'react';
import {TextInput} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';

const Input = ({
  value,
  setValue,
  keyboardType,
  returnKeyType,
  label,
  style,
  mode,
  numberOfLines,
  type,
  autoCapitalize,
  options,
}) => {
  return (
    <>
      {type === undefined ? (
        <TextInput
          numberOfLines={numberOfLines}
          mode={mode}
          selectionColor="#707070"
          label={label}
          theme={{colors: {primary: '#707070', underlineColor: 'transparent'}}}
          style={style}
          value={value}
          onChangeText={(text) => setValue(text)}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          autoCapitalize={
            autoCapitalize === undefined ? 'none' : autoCapitalize
          }
        />
      ) : (
        <TextInput
          numberOfLines={numberOfLines}
          mode={mode}
          theme={{colors: {primary: '#707070', underlineColor: 'transparent'}}}
          selectionColor="#707070"
          label={label}
          style={{...style}}
          value={value}
          onChangeText={(text) => setValue(text)}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          render={(props) => (
            <TextInputMask {...props} options={options} type={type} />
          )}
        />
      )}
    </>
  );
};
export default Input;
