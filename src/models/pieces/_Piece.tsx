export enum CHESS_COLOR {
    "BLACK",
    "WHITE"
}

export class Position {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    isLegalPostion(){
        return this.x>=0 && this.x<8 && this.y>=0 && this.y<8;
    }
}

export default abstract class Piece {
    position: Position | null;
    color: CHESS_COLOR;
    img:string;

    constructor(color: CHESS_COLOR, position: Position) {
        this.color = color;
        this.position = position.isLegalPostion()?position:null;
        this.img='';
    }

    move(x:number, y:number):Position | null{
        const newPosition=new Position(x,y);
        if (this.position?.isLegalPostion()) {
            this.position=newPosition;
            return newPosition;
        }
        return null;
    }

    abstract nextMoves():Position[];

}