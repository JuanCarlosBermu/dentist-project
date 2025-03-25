import React from "react";

function SearchBar() {  
    return (
        <div className="search-bar mb-3 d-flex align-items-center rounded-pill shadow-sm">
            <input type="text" placeholder="Search..." /> 
            <button className="btn bg-white rounded-pill">
                <i className="bi bi-search"></i>
            </button>
        </div>
    )
}
export default SearchBar;