import React from 'react';
import './App.css';
import './components/itemListContainer'
//import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar';
import ItemDetailContainer from './components/itemDetailContainer';


const App = () => {
  return (
    <>
    <NavBar />
    {/* <ItemListContainer greeting= "profe" /> */}
    <ItemDetailContainer />
    </>
  );
}

export default App;
