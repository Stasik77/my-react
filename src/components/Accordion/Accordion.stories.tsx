import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

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

const callback = action('accordion mode change ');
const onClickCallback = action('some item was clicked');


export const CollspsedAccordion = () => {
    return <Accordion titleValue={'collspsed'}
                      collapsed={true}
                      onChange={callback}
                      onClick={onClickCallback}
                      items={[]}/>
}

export const OpeneddAccordion = () => {
    return <Accordion titleValue={'openedd'}
                      collapsed={false}
                      onChange={callback}
                      onClick={onClickCallback}
                      items={[
                          {title: 'oleg', value: 1},
                          {title: 'dims', value: 2},
                          {title: 'oleg', value: 3},
                          {title: 'oleg', value: 4}]}
    />
}

export const PlayAccordion = () => {
    const [collapsed, setCollapsed] = React.useState(false);

    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      items={[
                          {title: 'oleg', value: 1},
                          {title: 'dims', value: 2},
                          {title: 'oleg', value: 3},
                          {title: 'oleg', value: 4}
                      ]}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      onClick={(value) => {
                          alert(`user ${value} is playing`)
                      }}

    />
}