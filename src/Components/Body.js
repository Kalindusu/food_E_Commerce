import React from 'react';
import ResturantCard from './ResturantCard';
import resList from '../utils/mockData';

const Body = () => {
    return (
      <div className="body">
        <div className='search'>Search</div>
        <div className='res-container'>
          {
            resList.map((resturant)=>(
              <ResturantCard resData={resturant} key={resturant.name} />
            ))
          }
          
        </div>
      </div>
    );
  }

  export default Body