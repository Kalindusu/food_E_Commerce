import React, { useState } from 'react';
import ResturantCard from './ResturantCard';
import resList from '../utils/mockData';



const Body = () => {

  const [listOfResturant,setListOfResurant]=useState(resList);    return (
      
      <div className="body">
        <div className='filter'>
          <button className="filter-btn" onClick={() => {
            const filterList=listOfResturant.filter((res)=>res.rating>4.5);
            setListOfResurant(filterList);
            
          }}
            >Top Rated Resturants</button>
        </div>
        <div className='res-container'>
          {
           listOfResturant.map((Resturants)=>(
            <ResturantCard resData={Resturants} key={Resturants.name}/>
           ))
          }
          
        </div>
      </div>  
    );
  }

  export default Body