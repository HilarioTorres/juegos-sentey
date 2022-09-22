import React from 'react';
import './App.css';
import './components/itemListContainer'
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar';
import ItemDetailContainer from './components/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting= "profe" />}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
