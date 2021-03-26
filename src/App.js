import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Ide from "./components/Ide"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/ide">
            <Ide/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
