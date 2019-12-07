import React from 'react';


const Mentions = ({articles}) => {
  var items = [];
  for (var i = 0; i < articles.length; i=i+2) {
    if (articles[i+1]) {
      items.push(
        <div>
          <div>
            <img src={articles[i].image} width='100' height='100' />
            <div className='title'>{articles[i].title}</div>
          </div>
          <div>
            <img src={articles[i+1].image} width='100' height='100' />
            <div className='title'>{articles[i+1].title}</div>
          </div>
        </div>
      )
    } else {
      items.push(
        <div>
          <img src={articles[i].image} width='100' height='100' />
          <div className='title'>{articles[i].title}</div>
        </div>
      )
    }
  }
  return (
    <div>{items}</div>
  )
}

export default Mentions;