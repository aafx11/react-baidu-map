import { ApiLoader, Map, useMap } from "@react-baidu-map/components";
import type { Meta, StoryObj } from '@storybook/react';

const base: Meta<typeof Map> = {
  title: "容器/Map组件",
  component: Map,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },

};

const baseTemplate = (args) => (
  <ApiLoader src='https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.188/dist/mapvgl.min.js'>
    <Map></Map>
  </ApiLoader>
);
baseTemplate.bind;

export default base;

type Story = StoryObj<typeof Map>;

export const LoggedIn: Story = {};

export const LoggedOut = {};
