import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GiftsList} from "./components/Gifts/GiftsList";
import {GiftsView} from "./views/GiftsView";

export const App = () => {
  return (
    <div className="App">
        <GiftsView/>
    </div>
  );
}

