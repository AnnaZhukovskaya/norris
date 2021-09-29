import './App.css';
import React from 'react';
import Header from './component/Header';
import Main from './component/Main';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
