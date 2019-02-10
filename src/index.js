import React from 'react';
import ReactDOM from 'react-dom';
import MyRss from './components/MyRss';


const flows = [
  {title: "hexlet", titleArticle: "name1"},
  {title: "hexlet", titleArticle: "name2"},
  {title: "habr", titleArticle: "name3"},
  {title: "habr", titleArticle: "name4"},
]

ReactDOM.render(
  <MyRss flows={flows}/>,
  document.getElementById('root')
);