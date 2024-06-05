import React from "react";

export interface MapProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  /**
   * 指定的地图容器
   */
  container?: HTMLDivElement | null | undefined;
  /**
   * 地图中心点
   */
  center?: BMap.Point | string;
  /**
   * 地图缩放等级
   */
  zoom?: number;
}
