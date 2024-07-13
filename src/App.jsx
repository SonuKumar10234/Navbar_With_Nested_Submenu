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
      {/* <main className='flex flex-col sm:flex-row gap-4 h-full sm:h-[calc(100vh_-_56px)] max-w-4xl mx-auto'>
        <CurrentWeather />
        <hr className='border sm:border-0 border-borderColor opacity-60'/>
        <SearchedWeather />
      </main> */}
      <main>
        {/* <TradeMarkReg /> */}
        <GstReg />
      </main>
    </div>
  );
};

export default App;