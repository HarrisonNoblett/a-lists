import React from "react";

// This file exports the Input and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <a {...props} href="/api/signup" className="btn btn-primary d-block">{props.children}</a>
    );
}