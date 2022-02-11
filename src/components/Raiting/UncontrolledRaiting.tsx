import React, {useState} from "react";

type RaitingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRaiting() {
    console.log('Raiting rendering')

    let [star, setStar] = useState(0)

    return (
        <div>
            <Star selected={star > 0}/>
            <button onClick={() => {
                if (star !== 1) {
                    setStar(1)
                } else {
                    setStar(0)
                }
            }}>1</button>

            <Star selected={star > 1}/>
            <button onClick={() => {
                if (star !== 2) {
                    setStar(2)
                } else {
                    setStar(0)
                }
            }}>2</button>

            <Star selected={star > 2}/>
            <button onClick={() => {
                if (star !== 3) {
                    setStar(3)
                } else {
                    setStar(0)
                }
            }}>3</button>

            <Star selected={star > 3}/>
            <button onClick={() => {
                if (star !== 4) {
                    setStar(4)
                } else {
                    setStar(0)
                }
            }}>4</button>

            <Star selected={star > 4}/>
            <button onClick={() => {
                if (star !== 5) {
                    setStar(5)
                } else {
                    setStar(0)
                }
            }}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return (
        <>
            {props.selected && <span><b>star</b> </span>}
            {!props.selected && <span>star </span>}
        </>
    )
}

export default UncontrolledRaiting