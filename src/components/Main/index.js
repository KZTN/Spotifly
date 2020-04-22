import React from "react";
import "./styles.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">dummy</div>
      <div className="mainContent">
        <h1>Uniquely yours</h1>
        <div className="cardsWrap">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1512608121467-72931bf816c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="album image"
              />
            </div>
            <div className="cardContent">
              <span>Liked songs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
