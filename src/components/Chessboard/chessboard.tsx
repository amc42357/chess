import Tile from "../Tile/tile";
import "./chessboard.css"

export default function Chessboard() {

    let board=Array(64).fill(<Tile></Tile>);
    return <div id="chessboard">{board}</div>
}