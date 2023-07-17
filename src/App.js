import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home';
import React from "react";
import MovieList from './Components/MovieList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/ml' element={<MovieList />} />
 </Routes>
    </>
  );
}

export default App;
