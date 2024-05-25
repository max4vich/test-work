import "./ProductList.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import EditProductForm from "../../components/EditProductForm/EditProductForm";
import ProductCard from "../../components/ProductCard/ProductCard";
import AddCommentForm from "../../components/AddCommentsForm/AddCommentsForm";
import { removeProduct, removeComment } from "../../redux/actions/actions";

const ProductList = () => {
    const [add, setAdd] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);
    const [commentProductId, setCommentProductId] = useState(null);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleAdd = () => {
        setAdd(!add);
    };

    const handleToggleSelect = (productId) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.includes(productId)
                ? prevSelected.filter((id) => id !== productId)
                : [...prevSelected, productId]
        );
    };

    const handleRemoveSelected = () => {
        setShowModal(true);
    };

    const confirmRemove = () => {
        selectedProducts.forEach((productId) => {
            dispatch(removeProduct(productId));
        });
        setSelectedProducts([]);
        setShowModal(false);
    };

    const cancelRemove = () => {
        setShowModal(false);
    };

    const handleEditProduct = (product) => {
        setProductToEdit(product);
    };

    const handleCloseEditModal = () => {
        setProductToEdit(null);
    };

    const handleAddComment = (productId) => {
        setCommentProductId(productId);
    };

    const handleCloseCommentModal = () => {
        setCommentProductId(null);
    };

    const handleRemoveComment = (productId, commentId) => {
        dispatch(removeComment(productId, commentId));
    };

    return (
        <div id="products">
            <h1>Product List:</h1>
            <div className="products_buttons">
                <button onClick={handleRemoveSelected}>Remove selected</button>
                <button onClick={handleAdd}>Add product</button>
            </div>
            <ul>
                {products.map((product) => (
                    <p key={product.id}>
                        <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => handleToggleSelect(product.id)}
                        />
                        <ProductCard
                            product={product}
                            onEdit={() => handleEditProduct(product)}
                            onAddComment={() => handleAddComment(product.id)}
                            onRemoveComment={handleRemoveComment}
                        />
                    </p>
                ))}
            </ul>
            {add && <AddProductForm setAdd={handleAdd} />}
            {showModal && (
                <div className="remove_modal">
                    <p>Are you sure, that you want to delete it?</p>
                    <div>
                        <button onClick={cancelRemove}>No</button>
                        <button onClick={confirmRemove}>Sumbit</button>
                    </div>
                </div>
            )}
            {productToEdit && (
                <EditProductForm
                    product={productToEdit}
                    onClose={handleCloseEditModal}
                />
            )}
            {commentProductId && (
                <AddCommentForm
                    productId={commentProductId}
                    onClose={handleCloseCommentModal}
                />
            )}
        </div>
    );
};

export default ProductList;
