import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/actions/actions";
import "./EditProductForm.css";

const EditProductForm = ({ product, onClose }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const dispatch = useDispatch();

    useEffect(() => {
        setUpdatedProduct(product);
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProduct(product.id, updatedProduct));
        onClose();
    };

    return (
        <div className="edit_modal">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={updatedProduct.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Count:
                    <input
                        type="number"
                        name="count"
                        value={updatedProduct.count}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Width:
                    <input
                        type="number"
                        name="width"
                        value={updatedProduct.size.width}
                        onChange={(e) =>
                            handleChange({
                                target: {
                                    name: "size",
                                    value: { ...updatedProduct.size, width: e.target.value },
                                },
                            })
                        }
                    />
                </label>
                <label>
                    Height:
                    <input
                        type="number"
                        name="height"
                        value={updatedProduct.size.height}
                        onChange={(e) =>
                            handleChange({
                                target: {
                                    name: "size",
                                    value: { ...updatedProduct.size, height: e.target.value },
                                },
                            })
                        }
                    />
                </label>
                <label>
                    Weight:
                    <input
                        type="text"
                        name="weight"
                        value={updatedProduct.weight}
                        onChange={handleChange}
                    />
                </label>
                <div className="buttons">
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditProductForm;
