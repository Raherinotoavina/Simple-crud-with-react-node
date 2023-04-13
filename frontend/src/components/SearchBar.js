import React from "react";
import * as reactFiver from "react-feather";

const SearchBar = ({setUrl}) => {
    const handleChange = (e) => {
        const search = e.target.value;
        setUrl(`http://127.0.0.1:8000/api/food/getAll?name=${search}`)
    }

    return (
        <div className="searchBar"> 
            <form action="">
                <div className="searchBar__input">
                    <input type="search" name="name" onChange={handleChange} id="search" placeholder="search here"/>
                    <label htmlFor="search"><reactFiver.Search className="icon"/></label>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;