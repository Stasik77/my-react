import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;


}

interface AccordionBodyProps {
    collapsed?: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    // const collapsed = true;

    let [collapsed, setCollapsed] = useState(false)


    const onStyl = {
        backgroundColor: collapsed ? "red" : " green"
    }


      return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {/*<button style={onStyl} onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
            { !collapsed && <AccordionBody/>}
        </div>
    )
}


    type AccordionTitlePropsType = {
        title: string,
        collapsed?: boolean
        onClick?: () => void;
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return (
            <h3 onClick={props.onClick}>--{props.title}--</h3>
        )
    }


    function AccordionBody({collapsed}: AccordionBodyProps) {
        console.log("AccordionBody rendering")
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }

