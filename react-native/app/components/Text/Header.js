import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Header = (props) => (
  <Text style={styles.header}>{props.children}</Text>
);

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
