import './App.css';
// import Form from "./Components/form"
import Add from "./Components/add"
import List from "./Components/list"
import View from "./Components/view"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/allPirates" component={Add} />
          <Route exact path="/" component={List} />
          <Route exact path="/pirate/:_id" component={View} />
        </div>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
