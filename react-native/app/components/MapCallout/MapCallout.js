import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const MapCallout = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.bubble}>
        <View style={styles.amount}>
          <Text style={styles.headerText}>{props.title}</Text>
          <Text style={styles.text}>{props.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

MapCallout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default MapCallout;
