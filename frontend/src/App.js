import React, {useState} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Modale from "./components/Modale";

const App = () => {
    const [modale, setModale] = useState(false);

    return (
        <div className="app">
            <Header />
            <SearchBar />
            <Table />
            <Footer setModale={setModale}/>
            {modale && <Modale setModale={setModale}/>}
        </div>
    )
}

export default App