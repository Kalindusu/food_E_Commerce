import React from 'react';
import ResturantCard from './ResturantCard';
import resList from '../utils/mockData';
import res1 from '../assets/res1.jpeg';
import re2 from '../assets/re2.jpeg';



const Body = () => {
  
  let listOfResturant=[
 
      {
        name: "Ocean Breeze",
        cuisines: "Seafood, Continental",
        rating: 3.5,
        time: "30-40 mins",
        image: res1
      },
      {
        name: "Spicy Delight",
        cuisines: "Indian, Asian",
        rating: 3.3,
        time: "25-35 mins",
        image: re2
      },

    {
      name: "Ocean Breeze",
      cuisines: "Seafood, Continental",
      rating: 4.5,
      time: "30-40 mins",
      image: res1
    },
    {
      name: "Spicy Delight",
      cuisines: "Indian, Asian",
      rating: 3.3,
      time: "25-35 mins",
      image: re2
    }
  ];
    return (
      
      <div className="body">
        <div className='filter'>
          <button className="filter-btn" onClick={() => {
            listOfResturant=listOfResturant.filter((res)=>res.rating>4);
            console.log(listOfResturant)
            
          }}
            >Top Rated Resturants</button>
        </div>
        <div className='res-container'>
          {
           resList.map((Resturants)=>(
            <ResturantCard resData={Resturants} key={Resturants.name}/>
           ))
          }
          
        </div>
      </div>  
    );
  }

  export default Body