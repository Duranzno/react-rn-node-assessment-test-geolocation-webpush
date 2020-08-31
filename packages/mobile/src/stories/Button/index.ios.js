import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Common';
export default function ButtonB({ onPress, children }) {
  return <Button onPress={onPress}>{children}</Button>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
