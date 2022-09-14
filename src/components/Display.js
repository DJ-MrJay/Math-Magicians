import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Display extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div id="result" className="calc-display">{children}</div>
    );
  }
}

Display.propTypes = {
  children: PropTypes.string.isRequired,
};
