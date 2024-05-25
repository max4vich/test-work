import "./AddCommentsForm.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/actions/actions";

const AddCommentForm = ({ productId, onClose }) => {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleAddComment = () => {
        const newComment = {
            id: Date.now(),
            productId,
            description,
            date: new Date().toLocaleString(),
        };
        dispatch(addComment(productId, newComment));
        onClose();
    };

    return (
        <div className="add_comment">
            <h2>Add Comment</h2>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your comment"
            />
            <div>
                <button onClick={onClose}>Cancel</button>
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
        </div>
    );
};

export default AddCommentForm;
