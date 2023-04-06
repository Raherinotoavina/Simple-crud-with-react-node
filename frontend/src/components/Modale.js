import React from "react";

const Modale = () => {
    return (
        <section>
            <form className="modale">
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" placeholder="enter name"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label><br />
                    <input type="number" id="preice" placeholder="enter price"/>
                </div>
                <div>
                    <label htmlFor="quantity">Quantity</label><br />
                    <input type="number" id="quantity" placeholder="enter quantity"/>
                </div>
                <div>
                    <label htmlFor="name">Quantity</label><br />
                    <input type="number" id="name" placeholder="enter name"/>
                </div>
                <div>
                    <label htmlFor="photo">Photo</label><br />
                    <input type="file" id="photo"/>
                </div>
            </form>
            <div className="overlay"></div>
        </section>
    )
}

export default Modale