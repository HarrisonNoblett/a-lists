import React from "react";
import "./style.css";

function DeleteBtn(props) {
    return (
        <span className="delBtn" {...props}>X</span>
    );
}

export default DeleteBtn;