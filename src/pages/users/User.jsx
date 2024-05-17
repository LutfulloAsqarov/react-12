import React from "react";
import useFetch from "../../hooks/useFetch";
import Users from "../../components/users/Users";

const User = () => {
    let { data, loading, error } = useFetch("/users");

    return (
        <div>
            <Users data={data} />
        </div>
    );
};

export default User;
