import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CharacterList from "./routes/CharactersList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
      </Switch>
    </Router>
  );
}

export default App;
