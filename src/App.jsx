import React from 'react';
import './App.css';
import './components/itemListContainer'
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar';


const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting= "profe" />
    </>
  );
}

export default App;
