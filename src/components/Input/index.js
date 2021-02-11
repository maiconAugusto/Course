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
  maxLength,
  type,
  autoCapitalize,
  options,
  autoFocus,
  blurOnSubmit,
  error,
}) => {
  return (
    <>
      {type === undefined ? (
        <TextInput
          autoFocus={autoFocus === undefined ? false : autoFocus}
          mode={mode}
          selectionColor="#707070"
          blurOnSubmit={blurOnSubmit === undefined ? false : blurOnSubmit}
          label={label}
          error={!error}
          theme={{
            colors: {primary: '#707070', underlineColor: 'red', error: 'red'},
          }}
          style={{...style}}
          value={value}
          onChangeText={(text) => setValue(text)}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize={
            autoCapitalize === undefined ? 'none' : autoCapitalize
          }
        />
      ) : (
        <TextInput
          mode={mode}
          theme={{
            colors: {
              primary: '#707070',
              underlineColor: 'transparent',
              error: 'red',
            },
          }}
          selectionColor="#707070"
          label={label}
          error={!error}
          blurOnSubmit={blurOnSubmit === undefined ? false : blurOnSubmit}
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
