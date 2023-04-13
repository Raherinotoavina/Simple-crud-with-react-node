import React, {useState} from "react";
import axios from "axios";

const Modale = ({setModale, addFood, food}) => {
    const [name, setName] = useState(food ? food.food.name : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", e.target.name.value);
        data.append("price", e.target.price.value);
        data.append("quantity", e.target.quantity.value);
        data.append("photo", e.target.photo.files[0]);

        addFood(data);
        setModale(false);
    }

    return (
        <section>
            <form className="modale" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="input" 
                        id="name" 
                        name="name" 
                        placeholder="enter name"
                    />
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