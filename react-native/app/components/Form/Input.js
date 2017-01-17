import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import styles from './styles';

const Input = (props) => {
  return (
    <View>
      <FormLabel>{props.label}</FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={styles.input}
        {...props}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
