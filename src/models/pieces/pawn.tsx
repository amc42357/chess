import Piece, {CHESS_COLOR, Position} from "./_Piece";

export class Pawn extends Piece {
    constructor(color : CHESS_COLOR, position : Position) {
        super(color, position);
        this.img = "pawn_" + (color === CHESS_COLOR.WHITE ? 'w' : 'b');
    }

    nextMoves() {
        let result = [] as Position[];


        return result;
    }

}
