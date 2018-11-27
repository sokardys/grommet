function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { compose } from 'recompose';
import { withTheme } from '../hocs';
import { StyledGrid } from './StyledGrid';
var styledComponents = {
  div: StyledGrid
}; // tag -> styled component

var Grid = function Grid(props) {
  var fill = props.fill,
      rows = props.rows,
      tag = props.tag,
      rest = _objectWithoutPropertiesLoose(props, ["fill", "rows", "tag"]);

  var StyledComponent = styledComponents[tag];

  if (!StyledComponent) {
    StyledComponent = StyledGrid.withComponent(tag);
    styledComponents[tag] = StyledComponent;
  }

  return React.createElement(StyledComponent, _extends({
    fillContainer: fill,
    rowsProp: rows
  }, rest));
};

Grid.defaultProps = {
  tag: 'div'
};
var GridDoc;

if (process.env.NODE_ENV !== 'production') {
  GridDoc = require('./doc').doc(Grid); // eslint-disable-line global-require
}

var GridWrapper = compose(withTheme)(GridDoc || Grid);
GridWrapper.available = typeof window !== 'undefined' && window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');
export { GridWrapper as Grid };