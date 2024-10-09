import React from 'react';
import ResturantCard from './ResturantCard';
import res1 from '../assets/res1.jpeg';
import re2 from '../assets/re2.jpeg';
import re3 from '../assets/re3.jpeg';
import re4 from '../assets/re4.jpeg';
import re5 from '../assets/re5.jpeg';
import re6 from '../assets/re6.jpeg';
import res7 from '../assets/res7.jpeg';
import re8 from '../assets/re8.jpeg';


const resList = [
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
      rating: 4.3,
      time: "25-35 mins",
      image: re2
    },
    {
      name: "The Pizza House",
      cuisines: "Italian, Pizza",
      rating: 4.7,
      time: "20-30 mins",
      image: re3
    },
    {
      name: "Grill Master",
      cuisines: "American, BBQ",
      rating: 4.4,
      time: "35-45 mins",
      image: re4
    },
    {
      name: "Sushi World",
      cuisines: "Japanese, Sushi",
      rating: 4.8,
      time: "25-35 mins",
      image: re5
    },
    {
      name: "Taco Fiesta",
      cuisines: "Mexican, Street Food",
      rating: 4.2,
      time: "20-30 mins",
      image: re6
    },
    {
      name: "Green Leaf Cafe",
      cuisines: "Vegan, Healthy",
      rating: 4.5,
      time: "30-40 mins",
      image:res7
    },
    {
      name: "Burger Hub",
      cuisines: "Fast Food, American",
      rating: 4.1,
      time: "15-25 mins",
      image: re8
    }
  ];
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