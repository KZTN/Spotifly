import React, { useEffect } from "react";
import Nav from "../../components/Nav";
import SearchNav from "../../components/SearchNav";
import "./styles.scss";
export default function Search() {
  useEffect(() => {
    localStorage.setItem("active", "search");
  }, []);

  return (
    <>
      <Nav />
      <div className="search">
        <SearchNav />
        <div className="mainContent">
          <h1>Browse</h1>
        </div>
      </div>
    </>
  );
}
