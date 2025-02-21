import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {Accordion} from './Accordion';
import React from 'react';

export default {
    components: Accordion
};




// type Story = StoryObj<typeof Accordion>;


// export const FirstStory: Story ={
//     args: {
//         titleValue:'Hello',
//         collapsed: true,
//             onChange: () => {}
//
//     }
//
// };

const onChangeHandler = action('onChange',);

export const CollspsedAccordion = () => {
    return <Accordion titleValue={'collspsed'}
                      collapsed={true}
                      onChange={() => {
                      }}/>
}

export const OpeneddAccordion = () => {
    return <Accordion titleValue={'openedd'}
                      collapsed={false}
                      onChange={() => {
                      }}/>
}

export const PlayAccordion = () => {
    const [collapsed, setCollapsed] = React.useState(false);

    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}