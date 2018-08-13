'use strict';

var PropTypes = require('prop-types');
var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'VoronoiCircle',

  // TODO: Check prop types
  propTypes: {
    handleMouseOver: PropTypes.any,
    handleMouseLeave: PropTypes.any,
    voronoiPath: PropTypes.any,
    cx: PropTypes.any,
    cy: PropTypes.any,
    circleRadius: PropTypes.any,
    circleFill: PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      circleRadius: 3,
      circleFill: '#1f77b4'
    };
  },
  render: function render() {
    return React.createElement(
      'g',
      null,
      React.createElement('path', {
        onMouseOver: this.props.handleMouseOver,
        onMouseLeave: this.props.handleMouseLeave,
        fill: 'transparent',
        d: this.props.voronoiPath
      }),
      React.createElement('circle', {
        onMouseOver: this.props.handleMouseOver,
        onMouseLeave: this.props.handleMouseLeave,
        cx: this.props.cx,
        cy: this.props.cy,
        r: this.props.circleRadius,
        fill: this.props.circleFill,
        className: 'rd3-linechart-circle'
      })
    );
  }
});