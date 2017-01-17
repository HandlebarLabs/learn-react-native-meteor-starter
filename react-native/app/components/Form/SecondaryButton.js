import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const SecondaryButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.secondaryButton}
    >
      <Text style={styles.secondaryButtonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

SecondaryButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default SecondaryButton;
