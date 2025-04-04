import React, {useState} from 'react';
import s from './Select.module.css'
import {log} from 'node:util';


type ItemType = {
    title: string,
    value: any,
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void;
    items: ItemType[]

}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const[hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredIten = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)
 const onItemClick = (value:any)=> {
     props.onChange(value);
     toggleItems()
 }

 const onKeyUp   = () => {
        for(let i=0;props.items.length; i++){

        }
 }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItems && selectedItems.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map((item) => <div
                            onMouseEnter={() => setHoveredElementValue(item)}
                            className={s.item + " "+ (hoveredElementValue === item ? s.select : "")}
                            key={item.value}
                             onClick={()=>{onItemClick(item.value)}}
                        >{item.title}
                        </div>)}
                    </div>
                }
            </div>
        </>

    )

}