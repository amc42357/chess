import React from "react";

import "./chessboard.css"

export default function Chessboard() {

    let board=Array(64).fill(<span className="tile"></span>);
    return <div id="chessboard">{board}</div>
}