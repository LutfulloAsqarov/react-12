import React, { useState } from "react";
import axios from "../../api";
import "./Users.scss";
import EditUserModel from "../edit-user-model/EditUserModel";

const Users = ({ data, isAdmin, setReload }) => {
    const [editUser, setEditUser] = useState(null);
    const handleDelete = (id) => {
        if (confirm("Are you sure")) {
            axios
                .delete(`/users/${id}`)
                .then((res) => {
                    setReload((prev) => !prev);
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleEdit = (el) => {
        setEditUser(el);
        // console.log(el);
    };

    console.log(isAdmin);
    let userItems = data?.map((el) => (
        <div key={el.id} className="users__card">
            <div className="users__card__img">
                <img src={el.avatar} alt="" />
            </div>
            <div className="users__card__info">
                <h2>{el.firstName}</h2>
                <p>{el.className}</p>
                <p>{el.phone}</p>
                <p>{el.email}</p>
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
        <div className="users">
            <div className="users__cards">{userItems}</div>

            {editUser ? (
                <EditUserModel
                    setData={setEditUser}
                    data={editUser}
                    setReload={setReload}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Users;
