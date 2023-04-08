import React, {useState, useEffect, useRef} from "react";
import "regenerator-runtime";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Modale from "./components/Modale";

const App = () => {
    const [modale, setModale] = useState(false);
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    useRef(foods);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios({
                    method:"get",
                    url:"http://127.0.0.1:8000/api/food/getAll"
                })
                setLoading(false);
                setFoods(res.data.foods);
            }
            fetchData();
        } catch(err) {
            console.log(err);
        }
    }, [foods])

    return (
        <div className="app">
            <Header />
            <SearchBar />
            <Table foods={foods} loading={loading}/>
            <Footer setModale={setModale}/>
            {modale && <Modale setModale={setModale}/>}
        </div>
    )
}

export default App