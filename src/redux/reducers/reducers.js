import { combineReducers } from "redux";
import { editProduct } from "./edit";

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.payload];
        case "REMOVE_PRODUCT":
            return state.filter((product) => product.id !== action.payload);
        case "EDIT_PRODUCT":
            return state.map((product) =>
                product.id === action.payload.productId
                    ? action.payload.updatedProduct
                    : product
            );
        case "ADD_COMMENT":
            return state.map((product) =>
                product.id === action.payload.productId
                    ? {
                        ...product,
                        comments: [...(product.comments || []), action.payload.comment],
                    }
                    : product
            );
        case "REMOVE_COMMENT":
            return state.map((product) =>
                product.id === action.payload.productId
                    ? {
                        ...product,
                        comments: product.comments.filter(
                            (comment) => comment.id !== action.payload.commentId
                        ),
                    }
                    : product
            );
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    products: productsReducer,
    edit: editProduct(),
});

export default rootReducer;
