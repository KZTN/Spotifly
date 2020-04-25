import React from "react";
import { ReactComponent as TopbackbtnIcon } from "../../assets/buttons/topbackbtn.svg";
import { ReactComponent as TopfowardbtnIcon } from "../../assets/buttons/topfowardbtn.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

import "./styles.scss";
const SearchNav = () => {
  return (
    <div className="searchNav">
      <div className="left-box">
        <div className="nav-buttons">
          <button>
            <TopbackbtnIcon />
          </button>
          <button>
            <TopfowardbtnIcon />
          </button>
        </div>
        <div className="search-box">
            <SearchIcon/>
            <form action="">
                <input type="text" name="inputserach" id="inputsearch" placeholder="Search for Artists, Songs, or Podcasts"/>
            </form>
        </div>
      </div>
      <div className="nav-auth">
        <button className="btn-signup">SIGN UP</button>
        <button className="btn-login">LOG IN</button>
      </div>
    </div>
  );
};

export default SearchNav;
