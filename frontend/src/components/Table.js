import React from "react";
import * as reactFiver from "react-feather";

const Table = ({data, loading, deleteFood}) => {
    const handleDelete = (e) => {
        e.preventDefault();
        const id = document.querySelector(".delete").getAttribute("href");
        deleteFood(id);
    }
    
    return (
        <div className="liste">
            {loading && 
                <div className="loading">
                    <reactFiver.Loader className="loading"/>
                </div>
            }
            {!loading && 
                <table className="table">
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><img src={`http://127.0.0.1:8000/food/${food.photo}?${Date.now()}`} loading="lazy" width="40px" alt="" /></td>
                                <td>{food.name}</td>
                                <td>{food.price}</td>
                                <td>{food.quantity}</td>
                                <td>{food.quantity>0 ? "in stock" : "out stock"}</td>
                                <td>
                                    <reactFiver.Edit2 className="icon edit"/>
                                    <a href={food._id} className="delete" onClick={handleDelete}><reactFiver.Trash2 onClick={handleDelete} className="icon delete"/></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            } 
        </div>
    )
}

export default Table;