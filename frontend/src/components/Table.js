import React from "react";
import * as reactFiver from "react-feather";

const Table = () => {
    return (
        <div className="liste">
            <table className="table">
                <tr>
                    <th>Numero</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Operation</th>
                </tr>
                <tr>
                    <td>201</td>
                    <td><img src={require("../assets/food/pexels-andre-saddi-13985154.jpg")} width="40px" height="40px" alt="" /></td>
                    <td>Pizza</td>
                    <td>1500 || Ar</td>
                    <td>23</td>
                    <td>In Stock</td>
                    <td>
                        <span><reactFiver.Edit2 className="icon edit"/></span>
                        <span><reactFiver.Trash2 className="icon delete"/></span>
                    </td>
                </tr>
                <tr>
                    <td>201</td>
                    <td><img src={require("../assets/food/pexels-anna-tukhfatullina-food-photographerstylist-2702674.jpg")} width="40px" height="40px" alt="" /></td>
                    <td>Pizza</td>
                    <td>1500 || Ar</td>
                    <td>23</td>
                    <td>In Stock</td>
                    <td>
                        <span><reactFiver.Edit2 className="icon edit"/></span>
                        <span><reactFiver.Trash2 className="icon delete"/></span>
                    </td>
                </tr>
                <tr>
                    <td>201</td>
                    <td><img src={require("../assets/food/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg")} width="40px" height="40px" alt="" /></td>
                    <td>Pizza</td>
                    <td>1500 || Ar</td>
                    <td>23</td>
                    <td>In Stock</td>
                    <td>
                        <span><reactFiver.Edit2 className="icon edit"/></span>
                        <span><reactFiver.Trash2 className="icon delete"/></span>
                    </td>
                </tr>
                <tr>
                    <td>201</td>
                    <td><img src={require("../assets/food/pexels-robin-stickel-70497.jpg")} width="40px" height="40px" alt="" /></td>
                    <td>Pizza</td>
                    <td>1500 || Ar</td>
                    <td>23</td>
                    <td>In Stock</td>
                    <td>
                        <span><reactFiver.Edit2 className="icon edit"/></span>
                        <span><reactFiver.Trash2 className="icon delete"/></span>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Table;