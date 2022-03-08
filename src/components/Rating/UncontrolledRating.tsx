import React, {useState} from "react";
import {RatingValueType} from "../../App";


export function UncontrolledRating() {
    console.log('Rating rendering')

    let [star, setStar] = useState(0)

    return (
        <div>
            <Star selected={star > 0} setStar={()=>setStar(1)}/>
            <Star selected={star > 1} setStar={()=>setStar(2)}/>
            <Star selected={star > 2} setStar={()=>setStar(3)}/>
            <Star selected={star > 3} setStar={()=>setStar(4)}/>
            <Star selected={star > 4} setStar={()=>setStar(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setStar: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return (
        <span onClick={ ()=> props.setStar() }>
            {props.selected ? <b>star </b>: 'star '}
        </span>
    )
}

export default UncontrolledRating