import ShelfForm from './ShelfForm'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import ShelfItem from './ShelfItem';

export default function ShelfPage() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const items = useSelector(store => store.shelfReducer)
console.log(items)
  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm />
      <p>All of the available items can be seen here.</p>
      <div>
        {items.map((item) =>{
          return(
            <ul key={item.id} style ={{listStyleType: 'none'}}><ShelfItem item={item}/></ul>
          )
        })}
      </div>
    </div>
  );
}
