import React from 'react';
import './App.css';
import Header from './components/Header';
import TradeMarkReg from './pages/TradeMarkReg';
import LetTemp from './components/LetTemp';
import GstReg from './pages/GstReg';

const App = () => {

  return (
    <div className={`app`}>
      <Header />
      {/* <LetTemp /> */}
      <main>
        <GstReg />
      </main>
    </div>
  );
};

export default App;
