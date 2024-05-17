import React from "react";
import "./EditProductModel.scss";
import axios from "../../api";

const EditProductModel = ({ setData, data, setReload }) => {
    const handleUpdatedProduct = (e) => {
        e.preventDefault();
        let updateProduct = {
            title: data.title,
            price: data.price,
        };

        axios
            .put(`products/${data.id}`, updateProduct)
            .then((res) => {
                setData(null);
                setReload((prev) => !prev);
                console.log(res);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <div className="overlay" onClick={() => setData(null)}></div>
            <form
                action=""
                className="edit-model"
                onSubmit={handleUpdatedProduct}
            >
                <h2>Edit product</h2>
                <input
                    required
                    value={data.title}
                    onChange={(e) =>
                        setData((prev) => ({ ...prev, title: e.target.value }))
                    }
                    type="text"
                />
                <input
                    required
                    value={data.price}
                    onChange={(e) =>
                        setData((prev) => ({ ...prev, price: e.target.value }))
                    }
                    type="number"
                />
                <button onClick={() => setData(null)}>Close</button>
                <button>Save</button>
            </form>
        </div>
    );
};

export default EditProductModel;
