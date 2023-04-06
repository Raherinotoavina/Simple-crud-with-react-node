import React from "react";
import * as reactFiver from "react-feather";

const SearchBar = () => {
    return (
        <div className="searchBar"> 
            <form action="">
                <div className="searchBar__input">
                    <input type="search" name="name" id="search" placeholder="search here"/>
                    <label htmlFor="search"><reactFiver.Search className="icon"/></label>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;