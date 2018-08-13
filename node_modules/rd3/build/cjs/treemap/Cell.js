'use strict';

var PropTypes = require('prop-types');
var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'Cell',

  propTypes: {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    label: PropTypes.string
  },

  render: function render() {
    var props = this.props;

    var textStyle = {
      textAnchor: 'middle',
      fill: props.textColor,
      fontSize: props.fontSize
    };

    var t = 'translate(' + props.x + ', ' + props.y + '  )';

    return React.createElement(
      'g',
      { transform: t },
      React.createElement('rect', {
        className: 'rd3-treemap-cell',
        width: props.width,
        height: props.height,
        fill: props.fill,
        onMouseOver: props.handleMouseOver,
        onMouseLeave: props.handleMouseLeave
      }),
      React.createElement(
        'text',
        {
          x: props.width / 2,
          y: props.height / 2,
          dy: '.35em',
          style: textStyle,
          className: 'rd3-treemap-cell-text'
        },
        props.label
      )
    );
  }
});