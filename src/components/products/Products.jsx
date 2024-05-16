import React from "react";
import "./Products.scss";
import axios from "../../api";

const Products = ({ data, isAdmin, setReload }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure?")) {
            axios
                .delete(`/products/${id}`)
                .then((res) => {
                    setReload((prev) => !prev);
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    };
    let productsItems = data?.map((el) => (
        <div key={el.id} className="wrapper__card">
            <div>
                <img src={el.image} alt="" />
            </div>
            <div>
                <h2>{el.title}</h2>
                <h3>{el.price}</h3>
                {isAdmin ? (
                    <div className="users__card__btns">
                        <button> Edit</button>
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
    return <div className="wrapper">{productsItems}</div>;
};

export default Products;
