import logo from './logo.svg';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import EmptyPage from './components/EmptyPage';

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='App'>
        <Header />  
        <DayList />
        <Day />
      </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
