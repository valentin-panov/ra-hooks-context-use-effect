import React from 'react';
import ListItem from './ListItem/ListItem';
import Loading from '../Loading/Loading';

export default function List({ list, getUserIdHandler }) {
  if (!list.length) {
    return <Loading />;
  }
  return (
    <div className='list_container'>
      <ul className='list'>
        {list.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            getUserIdHandler={getUserIdHandler}
          />
        ))}
      </ul>
    </div>
  );
}
