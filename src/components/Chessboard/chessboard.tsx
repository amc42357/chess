import Tile from "../Tile/tile";
import "./chessboard.css"

import { createBoard } from "../../controllers/boardController";



export default function Chessboard() {
    
    let board=createBoard()
    
    let displayBoard=board.map((v,i)=>(<Tile key={i} img={v?.img}></Tile>));

    return <div id="chessboard">{displayBoard}</div>
}