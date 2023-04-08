import React, {useState, useEffect, useRef} from "react";
import "regenerator-runtime";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Modale from "./components/Modale";
import useFetch from "./hooks/useFetch";

const App = () => {
    const [modale, setModale] = useState(false);
    const {data, loading, setData} = useFetch("http://127.0.0.1:8000/api/food/getAll"); 

    return (
        <div className="app">
            <Header />
            <SearchBar setData={setData}/>
            <Table foods={data ? data.foods : []} loading={loading}/>
            <Footer setModale={setModale}/>
            {modale && <Modale setModale={setModale} setData={setData}/>}
        </div>
    )
}

export default App