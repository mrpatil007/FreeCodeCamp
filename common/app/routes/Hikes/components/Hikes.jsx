import React, { PropTypes } from 'react';

export default React.createClass({
  displayName: 'Hikes',
  propTypes: {
    id: PropTypes.string
  },

  render() {
    const {
      id
    } = this.props;

    return (
      <h2>Hello { id }</h2>
    );
  }
});