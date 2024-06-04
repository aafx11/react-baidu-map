import React from "react";

export interface MapProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  /**
   * 指定的容器
   */
  container?: HTMLDivElement | null | undefined;
}
