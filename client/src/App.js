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
import UserProfile from './components/userProfile/UserProfile';
import EditUser from './components/userProfile/EditUser';
import UserArticleList from './components/userarticle/UserArticleList';
import MakeOffer from './components/offer/MakeOffer';

import ContactPage from './pages/contactPage/ContactPage';



import Agb from './components/footer/AGB/Agb';
import Impressum from './components/footer/Impressum/Impressum';
import Terms from './components/footer/Terms/Terms';
import FAQ from './components/footer/Support/FAQ/FAQ';

import Cookies from "./components/cookies/Cookies";

import Messages from './components/offer/Messages';



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
        <Route exact path="/userprofile/:id" component={UserProfile} />
        <Route exact path="/userprofile/:id/edituser" component={EditUser} />
        <Route exact path="/myarticle" component={UserArticleList} />
        <Route exact path="/makeoffer" component={MakeOffer} />

        <Route exact path="/contactus" component={ContactPage} />

        <Route exact path="/messages/:id" component={Messages} />
        <Route exact path="/agb" component={Agb} />
        <Route exact path="/impressum" component={Impressum} />
        <Route exact path="/Terms" component={Terms} />
        <Route exact path="/faq" component={FAQ} />


        


      </Switch>

      {children}

    <Footer />
    <Cookies />

    
    </div>
  );
}

export default App;