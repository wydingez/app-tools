import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class BrowserWraper extends React.Component {
  render() {
    return (
      <div className={'browser-mockup' + (this.props.withUrl ? ' with-url' : '')}>
        <div className="browser-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

BrowserWraper.propTypes = {
  withUrl: PropTypes.bool
}