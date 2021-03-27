import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Ide from "./components/Ide"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/ide">
            <Ide/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
