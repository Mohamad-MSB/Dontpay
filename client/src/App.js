import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import Article from './components/article/Article';
import AddarticlePage from './pages/addArticlePage/AddarticlePage';



import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/:id" component={Article} />

      </Switch>
      <AddarticlePage/>
    </div>
  );
}

export default App;
