// import axios from "../../../api";
// import React, { useState } from "react";

// let initialState = {
//     title: "",
//     price: "",
// };
// const CreateProduct = () => {
//     const [newProduct, setNewProduct] = useState(initialState);
//     console.log(newProduct);
//     const handleCreate = (e) => {
//         e.preventDefault();

//         axios
//             .post("/products", newProduct)
//             .then((res) => {
//                 setNewProduct(initialState);
//                 console.log(res);
//             })
//             .catch((res) => console.log(res));
//     };
//     return (
//         <div>
//             <form className="form" action="" onSubmit={handleCreate}>
//                 <h2 className="form__title">CreateProduct</h2>
//                 <input
//                     className="form__input"
//                     value={newProduct.title}
//                     onChange={(e) =>
//                         setNewProduct((prev) => ({
//                             ...prev,
//                             title: e.target.value,
//                         }))
//                     }
//                     type="text"
//                     placeholder="title"
//                 />
//                 <input
//                     className="form__input"
//                     value={newProduct.price}
//                     onChange={(e) =>
//                         setNewProduct((prev) => ({
//                             ...prev,
//                             price: +e.target.value,
//                         }))
//                     }
//                     type="number"
//                     placeholder="price"
//                 />
//                 <button> create </button>
//             </form>
//         </div>
//     );
// };

// export default CreateProduct;

import { toast } from "react-toastify";
import axios from "../../../api";
import React, { useRef } from "react";

const CreateProduct = () => {
    let titleRef = useRef();
    let priceRef = useRef();

    const handleCreate = (e) => {
        e.preventDefault();

        let obj = {
            title: titleRef.current.value,
            price: priceRef.current.value,
        };

        axios
            .post("/products", obj)
            .then((res) => {
                titleRef.current.value = "";
                priceRef.current.value = "";

                toast.success("Create new product");
            })
            .catch((res) => console.log(res));
    };
    return (
        <div>
            <form className="form" action="" onSubmit={handleCreate}>
                <h2 className="form__title">CreateProduct</h2>
                <input
                    required
                    ref={titleRef}
                    className="form__input"
                    type="text"
                    placeholder="title"
                />
                <input
                    required
                    ref={priceRef}
                    className="form__input"
                    type="number"
                    placeholder="price"
                />
                <button> create </button>
            </form>
        </div>
    );
};

export default CreateProduct;
