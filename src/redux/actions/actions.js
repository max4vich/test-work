export const addProduct = (product) => ({
    type: "ADD_PRODUCT",
    payload: product,
});

export const removeProduct = (productId) => ({
    type: "REMOVE_PRODUCT",
    payload: productId,
});

export const editProduct = (productId, updatedProduct) => ({
    type: "EDIT_PRODUCT",
    payload: { productId, updatedProduct },
});

export const addComment = (productId, comment) => ({
    type: "ADD_COMMENT",
    payload: { productId, comment },
});

export const removeComment = (productId, commentId) => ({
    type: "REMOVE_COMMENT",
    payload: { productId, commentId },
});
