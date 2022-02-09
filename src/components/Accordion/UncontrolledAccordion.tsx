import React, {useCallback, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !collapsed && <AccordionBody/> }
            <button onClick={ () => {setCollapsed(!collapsed)} }>Toggle</button>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )

}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}


export default UncontrolledAccordion;