import React from 'react';

export default class ListFlow extends React.Component {
    render() {
      console.log(this.props)
      return (
        <tr>
          <td>{this.props.titleArticle}</td>
        </tr>
      );
    }
  }