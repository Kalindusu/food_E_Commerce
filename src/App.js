import React from 'react';
import ReactDom from 'react-dom/client';
import './App.css';
import logo from '../src/assets/download.png';
import res1 from '../src/assets/res1.jpeg';
import re2 from '../src/assets/re2.jpeg';
import re3 from '../src/assets/re3.jpeg';
import re4 from '../src/assets/re4.jpeg';
import re5 from '../src/assets/re5.jpeg';
import re6 from '../src/assets/re6.jpeg';
import res7 from '../src/assets/res7.jpeg';
import re8 from '../src/assets/re8.jpeg';


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className='logo' src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard={
  backgroundColor: 'lightgray',
}

const ResturantCard = (props) => {
  const {resData}=props;
 const {image,name,cuisines,rating,time} = resData;
  return (
    <div className="res-card" style={styleCard}>
      <img className='res-img1' src={image} alt="res1" />  
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

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

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />);

export default App;
