import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

const Container = ({ scroll, children, passProps }) => {
  if (scroll === true) {
    return (
      <ScrollView style={styles.scrollView} {...passProps}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={styles.view} {...passProps}>
      {children}
    </View>
  );
};

Container.propTypes = {
  scroll: PropTypes.bool,
  // eslint-disable-next-line
  children: PropTypes.any,
  passProps: PropTypes.object,
};

export default Container;
