import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, { ICON_SIZE, ICON_COLOR, ICON_SIZE_SMALL } from './styles';

const NotFound = ({ text = 'Not Found', small = false }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="alert"
        size={small ? ICON_SIZE_SMALL : ICON_SIZE}
        color={ICON_COLOR}
      />
      <Text
        style={[styles.text, small && styles.textSmall]}
      >
        {text}
      </Text>
    </View>
  );
};

NotFound.propTypes = {
  text: PropTypes.string,
  small: PropTypes.bool,
};

export default NotFound;
