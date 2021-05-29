import React from "react";
import "./Navbar.css";

const Header = () => {
  return (
    <div>
      <div className="boxHeader">
        <div className="boxHeaderA">
          <div className="titleHeader">
            <b>Settings</b>
          </div>

          <div className="boxHeaderB">
            <h className="general">General</h>
            <h className="disActive">User</h>
            <h className="disActive">Team</h>
            <h className="disActive">Localization</h>
            <h className="disActive">Exclude Lists</h>
            <div className="posAct">
              <b className="activetitle">Usage & Billing</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
