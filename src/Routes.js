import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Spotifly" exact component={Home} />
        <Route path="/Spotifly/search" component={Search} />
        <Route path="/Spotifly/library" component={Library} />
      </Switch>
    </BrowserRouter>
  );
}
