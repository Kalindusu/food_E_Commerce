import React from 'react';
import ReactDom from 'react-dom/client';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

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
