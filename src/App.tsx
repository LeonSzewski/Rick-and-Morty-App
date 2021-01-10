import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterDetails from "./routes/CharacterDetails";
import CharacterList from "./routes/CharactersList";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/:id" component={CharacterDetails} />
      </Switch>
    </Router>
  );
}

export default App;
