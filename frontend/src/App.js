import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

const App = () => {
    return (
        <div className="app">
            <Header />
            <SearchBar />
            <Table />
        </div>
    )
}

export default App