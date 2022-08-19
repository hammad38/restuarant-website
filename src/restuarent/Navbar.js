import React from "react";


const Navbar = ({ filterItem, menuList }) => {
 
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem,key) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
                key={key}
               
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
