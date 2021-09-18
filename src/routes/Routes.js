import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { details, home } from "./routes.constants";
import CharacterDetails from "@/components/CharacterDetails";
import CharactersList from "@/components/CharactersList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={home} component={CharactersList} exact />
        <Route path={details} component={CharacterDetails} />
      </Switch>
    </Router>
  );
}

export default App;
