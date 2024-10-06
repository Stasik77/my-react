import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting";  //<<< с Помощью AS  можено переименовать Компоненту{Raiting as R}


function App() {

    return (
        <>
            <PageTitle title={"This is App"}/>
            <PageTitle title={"Users"}/>
            Article1
            <Raiting value={3} />
            <Accordion title={"menu"} />
            <Accordion title={"menu2"}/>
            Article2
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>

        </>

    );
}


function PageTitle(props: any) {
    debugger
    return (
        <h2>{props.title}</h2>
    )
}


export default App;
