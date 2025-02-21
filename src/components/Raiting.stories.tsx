import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Raiting, RatingValueType} from './Raiting';

export default {
    title:"Raiting",
    component:Raiting,
};

export const EmptyStars = ()=> <Raiting value={0} onClick={()=>{}}/>

export const Raiting1 = ()=> <Raiting value={1} onClick={()=>{}}/>
export const Raiting2 = ()=> <Raiting value={2} onClick={()=>{}}/>
export const Raiting3 = ()=> <Raiting value={3} onClick={()=>{}}/>
export const Raiting4 = ()=> <Raiting value={4} onClick={()=>{}}/>
export const Raiting5 = ()=> <Raiting value={5} onClick={()=>{}}/>

export const ChangeRaiting = ()=> {

    let [raitingValue, setRaitingValue] =useState<RatingValueType>(5)

return(
        <Raiting value={raitingValue} onClick={setRaitingValue}/>
)


}


