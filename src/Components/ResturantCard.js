import React from 'react';

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

  export default ResturantCard;