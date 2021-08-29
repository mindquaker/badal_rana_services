//eslint-disable
import "./App.css";
import React from "react";
import visa from "./images/visa.png";
import taxes from "./images/taxes.png";
import legalDoc from "./images/legalDoc.jpg";
import notery from "./images/notery.png";
import passport_ticket from "./images/passport_ticket.jpg";
import travel from "./images/travel.png";
import photography from "./images/photography.png";
import ticket from "./images/ticket.png";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className='h-full w-full  '>
      <div
        id='home'
        className='h-3/2 w-5/6 m-auto mt-10 flex flex-row rounded-3xl bg-blue-500 shadow-lg 
        
        '>
        <div className='flex flex-col h-full relative'>
          <img src={visa} alt='visa img' className='h-40 absolute w-40 ml-72' />
          <img
            src={taxes}
            alt='taxes ima'
            className='h-32 w-28 absolute ml-20 mt-36'
          />
          <img
            src={legalDoc}
            alt='legalDocs img'
            className='h-28 w-24 ml-64 absolute mt-56 '
          />
          <img src={notery} alt='notery img' className='h-32 w-28 ml-5' />
        </div>
        <div className='m-auto'>
          <div className='h-56 m-auto mb-2 w-56  mt-10 ring-4 ring-white rounded-full bg-gray-100'></div>
          <h1
            className='text-center text-7xl mb-4 font-bold text-black
            
            '>
            Badal Rana
          </h1>
          <h1 className='text-center text-3xl  mb-2 text-extrabold text-black'>
            Ph: +1 862-571-1255
          </h1>
        </div>
        <div className='flex flex-col relative'>
          <img
            src={passport_ticket}
            alt='passport img'
            className='h-32 w-28 -ml-56 mt-2 absolute'
          />
          <img
            src={ticket}
            alt='ticket img'
            className='h-32 w-28  absolute mt-60 -ml-20'
          />
          <img
            src={travel}
            alt='travel-img'
            className='h-32 w-28 absolute mt-36 -ml-80'
          />
          <img
            src={photography}
            alt='photography img'
            className='h-32 w-28 mr-3 mt-8'
          />
        </div>
      </div>

      <Nav />

      <Home />
    </div>
  );
}

export default App;
