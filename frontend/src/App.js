import React, {useState, useEffect, useRef} from "react";
import "regenerator-runtime";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Modale from "./components/Modale";
import axios from "axios";

const App = () => {
    const [modale, setModale] = useState(false);
    const [foods, setFoods] = useState([]);
    const [forceFetch, setForceFecth] = useState(false);
    const foodsRef = useRef(foods);

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios({
                method : "get",
                url : "http://127.0.0.1:8000/api/food/getAll"
            })
            const allFoods = res.data.data.foods;
            setFoods(allFoods);
        }
        fetchData()
    }, [foodsRef, forceFetch])

    const addFood = async (data) => {
        await axios({
            url : "http://127.0.0.1:8000/api/food/createFood",
            method : "post",
            data
        })
        setForceFecth(!forceFetch)
    }

    const deleteFood = async (id) => {
        await axios({
            method : "delete",
            url : `http://127.0.0.1:8000/api/food/deleteFood/${id}`
        })
        setForceFecth(!forceFetch)
    }

    return (
        <div className="app">
            <Header />
            <SearchBar/>
            <Table data={foods} deleteFood={deleteFood}/>
            <Footer setModale={setModale}/>
            {modale && <Modale setModale={setModale} addFood={addFood}/>}
        </div>
    )
}

export default App