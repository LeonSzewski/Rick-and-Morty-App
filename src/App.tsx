import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error";
import CharacterDetails from "./routes/CharacterDetails";
import CharacterList from "./routes/CharactersList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/:id" component={CharacterDetails} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
