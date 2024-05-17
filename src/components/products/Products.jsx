import React, { useState } from "react";
import "./Products.scss";
import axios from "../../api";
import EditProductModel from "../edit-product-model/EditProductModel";

const Products = ({ data, isAdmin, setReload }) => {
    const [editProduct, setEditProduct] = useState(null);
    const handleDelete = (id) => {
        if (confirm("Are you sure?")) {
            axios
                .delete(`/products/${id}`)
                .then((res) => {
                    setReload((prev) => !prev);
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleEdit = (el) => {
        setEditProduct(el);
    };

    let productsItems = data?.map((el) => (
        <div key={el.id} className="wrapper__card">
            <div>
                <img src={el.image} alt="" />
            </div>
            <div>
                <h2>{el.title}</h2>
                <h3>{el.price}</h3>
                {isAdmin ? (
                    <div className="users__card__btns">
                        <button onClick={() => handleEdit(el)}> Edit</button>
                        <button onClick={() => handleDelete(el.id)}>
                            Delete
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    ));
    return (
        <>
            <div className="wrapper">{productsItems}</div>
            {editProduct ? (
                <EditProductModel
                    setData={setEditProduct}
                    data={editProduct}
                    setReload={setReload}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default Products;
