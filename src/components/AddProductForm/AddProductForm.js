import "./AddProductForm.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/actions";

const AddProductForm = ({ setAdd }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: "",
        imageUrl: "",
        name: "",
        count: "",
        size: {
            width: "",
            height: "",
        },
        weight: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "width" || name === "height") {
            setFormData((prevState) => ({
                ...prevState,
                size: {
                    ...prevState.size,
                    [name]: value,
                },
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (
            formData.imageUrl.trim() === "" ||
            formData.name.trim() === "" ||
            formData.count.trim() === "" ||
            formData.size.width.trim() === "" ||
            formData.size.height.trim() === "" ||
            formData.weight.trim() === ""
        ) {
            alert("Будь ласка, заповніть всі поля");
            console.log(formData);
            return;
        }

        const newProduct = {
            id: formData.id,
            imageUrl: formData.imageUrl,
            name: formData.name,
            count: parseInt(formData.count),
            size: {
                width: formData.size.width,
                height: formData.size.height,
            },
            weight: formData.weight,
            comments: [],
        };

        dispatch(addProduct(newProduct));
        setFormData({
            id: "",
            imageUrl: "",
            name: "",
            count: "",
            size: {
                width: "",
                height: "",
            },
            weight: "",
        });
        setAdd();
    };

    return (
        <form id="add" onSubmit={handleSubmit}>
            <h1>Add Product</h1>
            <input
                type="number"
                placeholder="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
            />
            <input
                type="url"
                placeholder="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="count"
                name="count"
                value={formData.count}
                onChange={handleChange}
            />
            <div>
                <input
                    type="number"
                    placeholder="width"
                    name="width"
                    value={formData.size.width}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    placeholder="height"
                    name="height"
                    value={formData.size.height}
                    onChange={handleChange}
                />
            </div>
            <input
                type="number"
                placeholder="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
            />

            <div className="add_buttons">
                <button type="button" onClick={() => setAdd()}>
                    Cancel
                </button>
                <button type="submit">Add Product</button>
            </div>
        </form>
    );
};

export default AddProductForm;
