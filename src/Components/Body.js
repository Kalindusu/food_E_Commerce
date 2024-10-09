import React from 'react';
import ResturantCard from './ResturantCard';
import resList from '../utils/mockData';
const Body = () => {
    return (
      <div className="body">
        <div className='filter'>
          <button className="filter-btn" onClick={() => {
            resList=resList.filter((res) => res.rating > 4.3);
            console.log(resList);
            
          }}
            >Top Rated Resturants</button>
        </div>
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