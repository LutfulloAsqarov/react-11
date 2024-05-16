import axios from "../../../api";
import React, { useState } from "react";

let initialState = {
    title: "",
    price: "",
};
const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState(initialState);
    console.log(newProduct);
    const handleCreate = (e) => {
        e.preventDefault();

        axios
            .post("/products", newProduct)
            .then((res) => {
                setNewProduct(initialState);
                console.log(res);
            })
            .catch((res) => console.log(res));
    };
    return (
        <div>
            <form className="form" action="" onSubmit={handleCreate}>
                <h2 className="form__title">CreateProduct</h2>
                <input
                    className="form__input"
                    value={newProduct.title}
                    onChange={(e) =>
                        setNewProduct((prev) => ({
                            ...prev,
                            title: e.target.value,
                        }))
                    }
                    type="text"
                    placeholder="title"
                />
                <input
                    className="form__input"
                    value={newProduct.price}
                    onChange={(e) =>
                        setNewProduct((prev) => ({
                            ...prev,
                            price: +e.target.value,
                        }))
                    }
                    type="number"
                    placeholder="price"
                />
                <button> create </button>
            </form>
        </div>
    );
};

export default CreateProduct;
