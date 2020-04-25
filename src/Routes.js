import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Playlist from "./pages/Playlist";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Spotifly" exact component={Home} />
        <Route path="/Spotifly/search" component={Search} />
        <Route path="/Spotifly/library" component={Library} />
        <Route path="/Spotifly/playlist/:id" component={Playlist}/>
      </Switch>
    </BrowserRouter>
  );
}
