import { ApiLoader, Map } from "@react-baidu-map/components";

export default {
  title: "容器/ApiLoader组件",
  component: ApiLoader,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    src: "https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.188/dist/mapvgl.min.js",
  },
};

export const LoggedIn = {};
