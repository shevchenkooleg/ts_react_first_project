import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [isOnControlled, setIsOnControlled] = useState(false)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            <Rating value={ratingValue} onClick={ setRatingValue }/>
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            <UncontrolledRating/>
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrolledOnOff/>*/}
            <OnOff isOn={isOnControlled} SetIsOn={setIsOnControlled}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (

        <h1>
            {props.title}
        </h1>
    )
}

export default App;
