import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRaiting from "./components/Raiting/UncontrolledRaiting";


function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Raiting value={3}/>*/}
            <UncontrolledAccordion titleValue={'Menu'} />
            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={'Users'} />
            {/*<Accordion titleValue={'Users'} collapsed={true}/>*/}
            {/*Article 2*/}
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            <UncontrolledRaiting/>
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return(

        <h1>
            {props.title}
        </h1>
    )
}

export default App;
