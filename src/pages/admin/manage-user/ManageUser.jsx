import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Users from "../../../components/users/Users";

const ManageUser = () => {
    const [reload, setReload] = useState(true);
    let { data, loading, error } = useFetch("/users", reload);

    return (
        <div>
            <Users data={data} isAdmin={true} setReload={setReload} />
        </div>
    );
};

export default ManageUser;
