import { CHESS_COLOR, Pawn, Position, Rook, Knight, Bishop, Queen, King } from "../models/pieces";

function pawnsRow(row:number, color:CHESS_COLOR) {
    let results=[];
    for (let i = 0; i < 8; i++) {
        results.push(new Pawn(color,new Position(row,i)))
    }
    return results;
}

function mainRow(row:number, color:CHESS_COLOR) {
    let results=[
        new Rook(color,new Position(row,0)),
        new Knight(color,new Position(row,1)),
        new Bishop(color,new Position(row,2)),
        new Queen(color,new Position(row,3)),
        new King(color,new Position(row,4)),
        new Bishop(color,new Position(row,5)),
        new Knight(color,new Position(row,6)),
        new Rook(color,new Position(row,7)),
    ]
    return results;
}

export function createBoard(){
    return [
        ...mainRow(7,CHESS_COLOR.BLACK),
        ...pawnsRow(6,CHESS_COLOR.BLACK),
        ...Array(32).fill(undefined),
        ...pawnsRow(1,CHESS_COLOR.WHITE),
        ...mainRow(0,CHESS_COLOR.WHITE)
    ];
}