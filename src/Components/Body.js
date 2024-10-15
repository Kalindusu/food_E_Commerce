import React, { useEffect, useState } from 'react';
import ResturantCard from './ResturantCard';
import resList from '../utils/mockData';



const Body = () => {

  const [listOfResturant,setListOfResurant]=useState(resList);  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=12345');
        const json = await data.json();
        console.log(json);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };

    fetchData();
  }, []); 
  
  
  return (
      
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