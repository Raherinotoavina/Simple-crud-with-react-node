import React from "react";
import * as reactFiver from "react-feather";

const Header = () => {
    return (
        <header className="header">
            <img src={require("../assets/logo.png")} alt="" width="5%"/>
            <span className="header__title">ListCheck</span>
            <div className="theme">
                <reactFiver.Moon className="icon sun"/>
            </div>
        </header>
    )
}

export default Header;