import { HashRouter, Route} from "react-router-dom";
import Seoul from "./Seoul";

function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Seoul} />
      </HashRouter>
  );
}

export default App;
