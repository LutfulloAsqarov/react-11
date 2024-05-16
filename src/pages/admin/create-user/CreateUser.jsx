import React, { useState } from "react";
import "./CreateUser.scss";

let initialState = {
    firstName: "John",
    lastName: "Doe",
    phone: "43636346",
    email: "adsf@gmail.com",
};

const CreateUsers = () => {
    const [newUser, setNewUser] = useState(initialState);
    console.log(newUser);
    return (
        <div>
            <form className="form">
                <h2 className="form__title">Create User</h2>
                <input
                    className="form__input"
                    type="text"
                    value={newUser.firstName}
                    onChange={(e) =>
                        setNewUser((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                        }))
                    }
                    placeholder="First name"
                />
                <input
                    className="form__input"
                    type="text"
                    value={newUser.lastName}
                    onChange={(e) =>
                        setNewUser((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                        }))
                    }
                    placeholder="Last name"
                />
                <input
                    className="form__input"
                    type="number"
                    value={newUser.phone}
                    onChange={(e) =>
                        setNewUser((prev) => ({
                            ...prev,
                            phone: e.target.value,
                        }))
                    }
                    placeholder="Phone number"
                />
                <button>Create</button>
            </form>
        </div>
    );
};

export default CreateUsers;
