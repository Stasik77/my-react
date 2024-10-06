import React from "react";

export function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

            <h2>  lor1000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000lor10000v0 </h2>


        </ul>
    )
}

