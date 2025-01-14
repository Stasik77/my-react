import React, {useState} from "react";

type PropsType = {

    onChange:(on:boolean) => void;
}


export function UncontrolOnOff(props: PropsType) {

    console.log("onOff render")

    let [on,setOn]=useState(false)


    console.log("on:" + on)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "2px",
        backgroundColor: on ? "green" : " white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? " white" : " red"
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : " white"
    };

 const onClicked =() => {
     {
         setOn(true)
         props.onChange(true)
     }
 }

     const offClicked =() => {
         {
             setOn(true)
             props.onChange(false)
         }
     }


    return (

        <div>
            <div style={onStyle} onClick= {onClicked}>On
            </div>
            <div style={offStyle} onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}