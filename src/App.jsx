import React from 'react';
import "./App.css"
const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary bg-gradient bg-opacity-75 ">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse a" id="navbarTogglerDemo01">
            <div>
              <h1 className="padding-logo navbar-nav">
                Juegos sentey
              </h1>
            </div>
            <div className="centrar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="navbar-brand" href="#">Categoria 1</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="#">Categoria 2</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="#">Categoria 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;