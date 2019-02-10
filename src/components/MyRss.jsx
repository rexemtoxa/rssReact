import React from 'react';
import FormRss from './FormRss';
import TableFeeds from './TableFeeds';

export default class MyRss extends React.Component {
  render() {
    return (
      <div>
        <FormRss />
        <TableFeeds flows={this.props.flows} />
      </div>
    )
  }
} 