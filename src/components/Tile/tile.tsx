import "./tile.css"

function click(params: any) {
    console.log(params)
}

export default function Tile(props:any) {

    let x;
    if (props?.img) {
        x=<img src={"assets/images/"+props?.img+".png"} alt=""/>;
    }
    return <span className="tile" onClick={click}>
        {x}
    </span>
}