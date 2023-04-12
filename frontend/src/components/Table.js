import React from "react";
import * as reactFiver from "react-feather";

const Table = ({foods, loading}) => {
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
                        {foods.map((food, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><img src="" width="40px" alt="" /></td>
                                <td>{food.name}</td>
                                <td>{food.price}</td>
                                <td>{food.quantity}</td>
                                <td>{food.quantity>0 ? "in stock" : "out stock"}</td>
                                <td>
                                    <span><reactFiver.Edit2 className="icon edit"/></span>
                                    <span><reactFiver.Trash2 className="icon delete"/></span>
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