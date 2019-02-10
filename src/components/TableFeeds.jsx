import React from 'react';
import ListFlow from './ListFlow';
import HeaderFlow from './HeaderFlow';

export default class ProductTable extends React.Component {
  render(){
    const { flows } = this.props;
    let lastFlow = null
    const rows = [];
    flows.forEach((flow) => {
      if (flow.title !== lastFlow) {
        rows.push(<HeaderFlow title={flow.title} key={flow.title} />);
      }
      rows.push(<ListFlow titleArticle={flow.titleArticle} key={flow.titleArticle} />);
      lastFlow = flow.title;
    });
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
/* 
export const store  = [
  {title: "hexlet", titleAticle: "name1"},
  {title: "hexlet", titleAticle: "name2"},
  {title: "habr", titleAticle: "name3"},
  {title: "habr", titleAticle: "name4"},
]
*/

