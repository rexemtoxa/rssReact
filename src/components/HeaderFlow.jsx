import React from 'react';

export default class HeaderFlow extends React.Component {
    render() {
      return <tr><th>{this.props.title}</th></tr>;
    }
  }