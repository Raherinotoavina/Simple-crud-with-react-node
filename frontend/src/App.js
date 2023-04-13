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
    const [food, setFood] = useState(null);
    const [url, setUrl] = useState("http://127.0.0.1:8000/api/food/getAll");

    // Fecth Food
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios({
                method : "get",
                url
            })
            const allFoods = res.data.data.foods;
            setFoods(allFoods);
        }
        fetchData()
    }, [url,forceFetch])

    // Add Food
    const addFood = async (data) => {
        await axios({
            url : "http://127.0.0.1:8000/api/food/createFood",
            method : "post",
            data
        })
        setForceFecth(!forceFetch)
    }

    // DeleteFood
    const deleteFood = async (id) => {
        await axios({
            method : "delete",
            url : `http://127.0.0.1:8000/api/food/deleteFood/${id}`
        })
        setForceFecth(!forceFetch)
    }

    // Get One Food
    const getOneFood = async (id) => {
        const res = await axios({
            method : "get",
            url : `http://127.0.0.1:8000/api/food/getOneFood/${id}`
        })
        setFood(res.data.data);
        setModale(true);
    }

    // UpdateFood
    const updateFood = async (id, data) => {
        console.log(data);
        try {
            await axios({
                method : "patch",
                url : `http://127.0.0.1:8000/api/food/updateFood/${id}`,
                data
            })
            setForceFecth(!forceFetch)
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="app">
            <Header />
            <SearchBar
                setUrl={setUrl}
            />
            <Table 
                setModale={setModale} 
                data={foods} 
                deleteFood={deleteFood}
                getOneFood={getOneFood}
            />
            <Footer 
                setModale={setModale}
                setFood={setFood}
            />
            {modale && 
                <Modale 
                    setModale={setModale} 
                    addFood={addFood}
                    food={food}
                    updateFood={updateFood}
            />}
        </div>
    )
}

export default App