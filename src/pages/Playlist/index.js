import React from "react";
import Nav from "../../components/Nav";
import SearchNav from "../../components/SearchNav";
import "./styles.scss";
export default function Playlist(props) {
  return (
    <>
      <Nav />
      <div className="playlist">
        <SearchNav />
        <div className="mainContent">
          <h1>this is the Playlist n</h1>
        </div>
      </div>
    </>
  );
}
