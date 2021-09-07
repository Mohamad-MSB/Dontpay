import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AddArticle from './components/article/AddArticle';
import Logout from './components/loggout/Loggout';
import CategoriesList from './components/article/CategoriesList';
import ViewCategory from './components/article/ViewCategory';
import SingleArticle from './components/article/SingleArticle';
import FavoriteList from './components/article/FavoriteList';


function App({children}) {


  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/add" component={AddArticle} />
        <Route exact path="/category" component={CategoriesList} />
        <Route exact path="/category/:category" component={ViewCategory} />
        <Route exact path="/category/:category/:id" component={SingleArticle} />
        <Route exact path="/category/:category/:id/:favorite" component={SingleArticle} />
        <Route exact path="/favorites" component={FavoriteList} />

      </Switch>


      {children}

    <Footer />
    </div>
  );
}

export default App;
