import { ApiLoader, Map, useMap } from "@react-baidu-map/components";
import type { Meta, StoryObj } from '@storybook/react';


const Template = (args) => (
  <ApiLoader src='https://api.map.baidu.com/getscript?v=1.0&&type=webgl&ak=hjS0pumZBrkgL8FgPFMuiMiWQomdR8Tr'>
    {/* <Map center={{ lng: 116.404, lat: 39.915 }}></Map> */}
  </ApiLoader>
);

const base: Meta<typeof Map> = {
  title: "容器/Map组件",
  component: Map,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ApiLoader src='https://api.map.baidu.com/getscript?v=1.0&&type=webgl&ak=hjS0pumZBrkgL8FgPFMuiMiWQomdR8Tr'>
        <Story></Story>
      </ApiLoader>
    ),
  ]
};

// export const base = Template.bind({});

export default base;

type Story = StoryObj<typeof Map>;

export const LoggedIn: Story = {};

export const LoggedOut = {};
