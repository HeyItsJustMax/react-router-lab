import React from "react"
import "./App.css"
//Import Route and our Components
import { Route, Switch } from "react-router-dom"
import Stocks from "./pages/stocks"
import Main from "./pages/main"
import Price from "./pages/price"
import Nav from "./components/nav"


function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/stocks/:symbol"
        render={(routerProps) => <Stocks {...routerProps} />}>
        </Route>
        <Route path="/price">
          <Price />
        </Route>
      </Switch>
    </div>
  );
}

export default App



