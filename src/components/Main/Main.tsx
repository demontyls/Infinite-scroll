import React, {useEffect, useState} from 'react';
import { VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import Card from '../Card/Card';
import {ICardField} from '../Scroll-wrapper/Interface';

const Main = () => {
  const [entries, setEntries] = useState<ICardField[]>([]);
  const isItemLoaded = index => index < entries.length && entries[index] !== null;
  const [count, setCount] = useState(1);

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=10`)
      .then(response => response.json())
        .then(( data:ICardField[]) => {
            setEntries( data);
            setCount(count + 1);
        });
  }, []);

  const Row = (index) => {
    return <Card key={index.index} data={entries[index.index]} from={'Infinite-scroll'} setCount={setCount} style={index.style}/>
  }
  const loadMoreItems = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=10`)
        .then(response => response.json())
        .then(( data:ICardField[]) => {
            setEntries(entries.concat(data));
            setCount(count + 1);
        });
  }

  return (
    <div className="virtual-wrapper d-flex justify-content-center">
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={entries.length * 10}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <VariableSizeList
            className="List"
            height={124 * 5}
            width={500}
            itemCount={entries.length}
            onItemsRendered={onItemsRendered}
            itemSize={() => 124}
            ref={ref}
          >
            { Row }
          </VariableSizeList>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default Main;