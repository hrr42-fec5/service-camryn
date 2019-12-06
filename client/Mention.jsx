import React from 'react';

var Mention = ({article}) => (
  <div key={article.id}>
    <img src={article.image}></img>
    <div className='title'>{article.title}</div>
  </div>
)

export default Mention;