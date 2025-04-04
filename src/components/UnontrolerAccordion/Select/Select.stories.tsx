
import {action} from '@storybook/addon-actions';

import React, {useState} from 'react';
import {Select} from './Select';

export default {
    title: 'Select',
    components: Select
};

const onClickCallback = action('some item was clicked');

export const WithtValue  = () => {
    const[value, setValue] =useState("2")
    return  <Select
        value={value}
        onChange={setValue}
        items={[
        {title: 'oleg', value: "1"},
        {title: 'dims', value: "2"},
        {title: 'den', value: "3"},
        {title: 'bob', value: "4"}]}
        />
}

export const WithoutValue  = () => {
    const[value,setValue] =useState(null)
    return  <Select
        onChange={setValue}
        value={value}
        items={[
        {title: 'oleg', value: "1"},
        {title: 'dims', value: "2"},
        {title: 'den', value: "3"},
        {title: 'bob', value: "4"}]}
        />
}