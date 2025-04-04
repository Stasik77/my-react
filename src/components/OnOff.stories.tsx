import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import {OnOff} from './OnOff';


export default {
    title:"OnOff",
    component:OnOff,
};

const callBaclk = ()=>{
    return action("on or off clicked")
}


export const OnMode = ()=><OnOff on={true} onChange={callBaclk}/>
export const OffMode = ()=><OnOff on={false} onChange={callBaclk}/>


export const ModeChanging = ()=> {

    let [value, setValue] =useState<boolean>(false)

    return(
        <OnOff on={value} onChange={setValue}/>
    )


}
