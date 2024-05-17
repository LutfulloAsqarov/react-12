// import React, { useState } from "react";
// import "./CreateUser.scss";
// import axios from "../../../api";

// let initialState = {
//     firstName: "John",
//     lastName: "Doe",
//     phone: "43636346",
//     email: "adsf@gmail.com",
// };

// const CreateUsers = () => {
//     const [newUser, setNewUser] = useState(initialState);
//     console.log(newUser);

//     const handleCreate = (e) => {
//         e.preventDefault();

//         axios
//             .post("/users", newUser)
//             .then((res) => {
//                 setNewUser(initialState);
//                 console.log(res);
//             })
//             .catch((err) => console.log(err));
//     };

//     return (
//         <div>
//             <form className="form" onSubmit={handleCreate}>
//                 <h2 className="form__title">Create User</h2>
//                 <input
//                     className="form__input"
//                     type="text"
//                     value={newUser.firstName}
//                     onChange={(e) =>
//                         setNewUser((prev) => ({
//                             ...prev,
//                             firstName: e.target.value,
//                         }))
//                     }
//                     placeholder="First name"
//                 />
//                 <input
//                     className="form__input"
//                     type="text"
//                     value={newUser.lastName}
//                     onChange={(e) =>
//                         setNewUser((prev) => ({
//                             ...prev,
//                             lastName: e.target.value,
//                         }))
//                     }
//                     placeholder="Last name"
//                 />
//                 <input
//                     className="form__input"
//                     type="number"
//                     value={newUser.phone}
//                     onChange={(e) =>
//                         setNewUser((prev) => ({
//                             ...prev,
//                             phone: e.target.value,
//                         }))
//                     }
//                     placeholder="Phone number"
//                 />
//                 <button>Create</button>
//             </form>
//         </div>
//     );
// };

// export default CreateUsers;

import React, { useRef } from "react";
import "./CreateUser.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

const CreateUsers = () => {
    let firstName = useRef();
    let lastName = useRef();
    let phone = useRef();

    const handleCreate = (e) => {
        e.preventDefault();

        let obj = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            phone: phone.current.value,
        };

        axios
            .post("/users", obj)
            .then((res) => {
                firstName.current.value = "";
                lastName.current.value = "";
                phone.current.value = "";

                toast.success("Create new user");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <form className="form" onSubmit={handleCreate}>
                <h2 className="form__title">Create User</h2>
                <input
                    required
                    ref={firstName}
                    className="form__input"
                    type="text"
                    placeholder="First name"
                />
                <input
                    required
                    ref={lastName}
                    className="form__input"
                    type="text"
                    placeholder="Last name"
                />
                <input
                    required
                    ref={phone}
                    className="form__input"
                    type="number"
                    placeholder="Phone number"
                />
                <button>Create</button>
            </form>
        </div>
    );
};

export default CreateUsers;
