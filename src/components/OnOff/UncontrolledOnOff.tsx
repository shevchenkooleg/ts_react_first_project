import React, {useState} from 'react';

type OnOffPropsType = {
    // isOn: boolean
}

const UncontrolledOnOff = () => {
    let [isOn, SetIsOn] = useState(false)

    const contentStyle = {
        marginTop: '20px',
    }
    const onButtonStyle = {
        display: 'inline-block',
        width: '50px',
        height: '20px',
        backgroundColor: isOn ? 'green' : 'white',
        border: 'black 1px solid',
        marginLeft: '3px',
    }

    const offButtonStyle = {
        display: 'inline-block',
        width: '50px',
        height: '20px',
        backgroundColor: isOn ? 'white' : 'red',
        border: 'black 1px solid',
        marginLeft: '3px',
    };

    const blinkerStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: isOn ? 'green' : 'red',
        border: 'black 1px solid',
        marginLeft: '5px',
    };


    return (
        <div style={contentStyle}>
            <div onClick={ () => { SetIsOn(true) }} style={onButtonStyle}>On</div>
            <div onClick={ () => { SetIsOn(false) }} style={offButtonStyle}>Off</div>
            <div style={blinkerStyle}></div>
        </div>
    )
}


export default UncontrolledOnOff;