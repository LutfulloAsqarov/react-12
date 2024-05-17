import React from "react";

import axios from "../../api";
const EditUserModel = ({ setData, data, setReload }) => {
    const handleUpdatedUser = (e) => {
        e.preventDefault();
        let updateUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
        };

        axios
            .put(`users/${data.id}`, updateUser)
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
            <form action="" className="edit-model" onSubmit={handleUpdatedUser}>
                <h2>Edit User</h2>
                <input
                    required
                    value={data.firstName}
                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                        }))
                    }
                    type="text"
                />
                <input
                    required
                    value={data.lastName}
                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                        }))
                    }
                    type="text"
                />
                <input
                    required
                    value={data.phone}
                    onChange={(e) =>
                        setData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    type="text"
                />
                <button onClick={() => setData(null)}>Close</button>
                <button>Save</button>
            </form>
        </div>
    );
};

export default EditUserModel;
