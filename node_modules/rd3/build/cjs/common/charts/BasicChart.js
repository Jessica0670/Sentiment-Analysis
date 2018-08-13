'use strict';

var PropTypes = require('prop-types');
var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({

  displayName: 'BasicChart',

  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    svgClassName: PropTypes.string,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-basic-chart',
      svgClassName: 'rd3-chart',
      titleClassName: 'rd3-chart-title',
      title: ''
    };
  },
  _renderTitle: function _renderTitle() {
    var props = this.props;

    if (props.title !== '') {
      return React.createElement(
        'h4',
        {
          className: props.titleClassName
        },
        props.title
      );
    }
    return null;
  },
  _renderChart: function _renderChart() {
    var props = this.props;

    return React.createElement(
      'svg',
      {
        className: props.svgClassName,
        height: props.height,
        viewBox: props.viewBox,
        width: props.width
      },
      props.children
    );
  },
  render: function render() {
    var props = this.props;

    return React.createElement(
      'div',
      {
        className: props.className
      },
      this._renderTitle(),
      this._renderChart()
    );
  }
});