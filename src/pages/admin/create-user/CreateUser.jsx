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
