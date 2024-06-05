import { useEffect, useState, useMemo, useContext, forwardRef } from 'react';
import { requireScript } from "@react-baidu-map/shared";
import { ApiLoaderProps } from './type';

export const ApiLoader = forwardRef<{}, ApiLoaderProps>(({ src, children, ...props }, ref) => {
  useEffect(() => {
    requireScript(src);
  }, [src]);
  return (
    <>
      {children}
    </>
  );
});