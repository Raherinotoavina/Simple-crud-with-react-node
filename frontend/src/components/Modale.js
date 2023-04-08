import React from "react";

const Modale = () => {
    return (
        <section>
            <form className="modale">
                <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" className="input" id="name" placeholder="enter name"/>
                </div>
                <div>
                    <label htmlFor="price" className="label">Price</label>
                    <input type="number" className="input" id="preice" placeholder="enter price"/>
                </div>
                <div>
                    <label htmlFor="quantity" className="label">Quantity</label>
                    <input type="number" id="quantity" className="input" placeholder="enter quantity"/>
                </div>
                <div>
                    <label htmlFor="name" className="label">Quantity</label>
                    <input type="number" className="input" id="name" placeholder="enter name"/>
                </div>
                <div>
                    <input type="file" id="photo" className="select"/>
                    <div className="modale__btn">
                        <label htmlFor="photo" className="fileInput label">Choose a photo</label>
                        <button className="btn btn-valider">Valider</button>
                    </div>
                </div>
            </form>
            <div className="overlay"></div>
        </section>
    )
}

export default Modale