import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navigation } from "./components";
import { Home, Projects, Articles } from "./pages";

function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/articles" component={Articles}></Route>
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
