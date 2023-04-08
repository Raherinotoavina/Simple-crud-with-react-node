import React from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Modale = ({modale, setModale}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", e.target.name.value);
        data.append("price", e.target.price.value);
        data.append("quantity", e.target.quantity.value);
        data.append("photo", e.target.photo.files[0]);

        const addFood = async () => {
            try {
                const res = await axios({
                    method : "post",
                    url : "http://127.0.0.1:8000/api/food/createFood",
                    data
                })
                setModale(false);
            } catch(err) {
                console.log(err);
            }
        }

        addFood();
    }

    return (
        <section>
            <form className="modale" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" className="input" id="name" name="name" placeholder="enter name"/>
                </div>
                <div>
                    <label htmlFor="price" className="label">Price</label>
                    <input type="number" className="input" id="price" name="price" placeholder="enter price"/>
                </div>
                <div>
                    <label htmlFor="quantity" className="label">Quantity</label>
                    <input type="number" id="quantity" className="input" name="quantity" placeholder="enter quantity"/>
                </div>
                <div>
                    <input type="file" name="photo" id="photo" className="select"/>
                    <div className="modale__btn">
                        <label htmlFor="photo" className="fileInput label">Choose a photo</label>
                        <button className="btn btn-valider" type="submit">Valider</button>
                    </div>
                </div>
            </form>
            <div className="overlay" onClick={() => setModale(false)}></div>
        </section>
    )
}

export default Modale