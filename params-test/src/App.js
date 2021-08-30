
import './App.css';
import { Switch, Route } from "react-router-dom";
import Article from './Article';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <h1>test params</h1>
      <Navbar />

      <Switch>
        <Route exact path="/:id" children={<Article />}/>
      </Switch>
    </div>
  );
}

export default App;
