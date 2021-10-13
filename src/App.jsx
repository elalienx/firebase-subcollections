// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Category from "./pages/Category";
import Home from "./pages/Home";
import Vehicle from "./pages/Vehicle";

export default function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Category} path="category/:category-name" />
          <Route component={Vehicle} path="vehicle/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
