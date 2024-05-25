import "./ProductCard.css";
import React from "react";

function ProductCard({ product, onEdit, onAddComment, onRemoveComment }) {
    return (
        <div className="product">
            <img src={product.imageUrl} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p>Count: {product.count}</p>
                <p>
                    Size: {product.size.width} x {product.size.height}
                </p>
                <p>Weight: {product.weight}</p>
                <div className="buttons">
                    <button onClick={onEdit}>Edit Product</button>
                    <button onClick={onAddComment}>Add Comment</button>
                </div>
                {product.comments && (
                    <div className="comments">
                        {product.comments.map((comment) => (
                            <p key={comment.id} className="comment">
                                {comment.description} - {comment.date}
                                <button onClick={() => onRemoveComment(product.id, comment.id)}>
                                    Remove Comment
                                </button>
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
