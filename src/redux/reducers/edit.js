export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const editProduct = (productId, updatedProduct) => ({
    type: EDIT_PRODUCT,
    payload: {
        productId,
        updatedProduct,
    },
});
