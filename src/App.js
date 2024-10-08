import React from 'react';
import ReactDom from 'react-dom/client';
import './App.css';
import logo from '../src/assets/download.png';

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

const ResturantCard = () => {
  return (
    <div className="res-card">
      <h3>Megna Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className='search'>Search</div>
      <div className='res-container'>
        <ResturantCard />
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
