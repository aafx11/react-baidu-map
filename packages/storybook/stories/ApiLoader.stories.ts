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
    src: "https://api.map.baidu.com/getscript?v=1.0&&type=webgl&ak=hjS0pumZBrkgL8FgPFMuiMiWQomdR8Tr",
  },
};

export const LoggedIn = {};
