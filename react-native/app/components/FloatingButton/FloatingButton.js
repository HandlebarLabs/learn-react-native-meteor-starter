import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles, { buttonColor } from './styles';

const FloatingButton = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        raised
        reverse
        name={props.icon || 'map'}
        type="font-awesome"
        color={buttonColor}
        onPress={props.onPress}
      />
    </View>
  );
};

FloatingButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

export default FloatingButton;
