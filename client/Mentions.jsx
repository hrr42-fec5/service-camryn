import React from 'react';

const Mentions = ({articles}) => {
  console.log("Articles ", articles);
  var items = articles.map((article) => (
    <div>
      <img src={article.image} width='100' height='100' />
      <div className='title'>{article.title}</div>
    </div>
  ))
  return (
  <div>{items}</div>
  )
}

export default Mentions;