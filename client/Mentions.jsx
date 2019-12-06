import React from 'react';

var Mentions = ({articles}) => (
  <div>
    {articles.map(article =>
      <Mention article={article}/>
      )}
  </div>
)