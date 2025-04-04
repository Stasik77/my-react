import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRaiting} from './UncontrolledRaiting';

export default {
    title:"UncontrolledRaiting",
    component:UncontrolledRaiting,

};


export const EmptyStar = ()=><UncontrolledRaiting defaltValue={0}/>
export const Raiting1 = ()=><UncontrolledRaiting defaltValue={1}/>
export const Raiting2 = ()=><UncontrolledRaiting defaltValue={2}/>
export const Raiting3 = ()=><UncontrolledRaiting defaltValue={3}/>
export const Raiting4 = ()=><UncontrolledRaiting defaltValue={4}/>
export const Raiting5 = ()=><UncontrolledRaiting defaltValue={5}/>
