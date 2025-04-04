import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionTitlePropsType} from './components/Accordion/Accordion';
import {Raiting, RatingValueType} from './components/Raiting';
import {OnOff} from "./components/OnOff";
import {UncontrolledAccordion} from "./components/UnontrolerAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/UncontrolledRaiting";
import {UncontrolOnOff} from './components/UncontrolOnOff';
import {Select} from './components/UnontrolerAccordion/Select/Select';  //<<< с Помощью AS  можено переименовать Компоненту{Raiting as R}


function App() {

    let [raitingValue, setRaitingValue] = useState<RatingValueType>(5)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchon, setswitchon] = useState<boolean>(false)
    
    return (
        <div className={"App"}>

            {/*<UncontrolledAccordion collapsed titleValue={"--menu--"}/>*/}
            {/*<UncontrolledAccordion  collapsed titleValue={"--user--"}/>*/}
            {/*<Raiting value={raitingValue} onClick={setRaitingValue}/>*/}
            <UncontrolledRaiting />
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}
            <Accordion titleValue={"menu"}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
                       onClick={()=>{}}
                       items={[]}

            />

            <Select value={1}  onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} items={[]}/>

            {/*<Accordion titleValue={"user"} collapsed={false}/>*/}
            {/*<OnOff on/>*/}
            {/*<OnOff on/>*/}
            {/*<OnOff on/>*/}
            {/*<OnOff on={false}/>*/}
            <OnOff on={switchon} onChange={(on)=>{setswitchon(on)}}/>
            {/*<UncontrolOnOff onChange={setswitchon} /> {switchon.toString()}*/}
        </div>

    );
}
type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    return (
        <h2>{props.title}</h2>
    )
}


export default App;
