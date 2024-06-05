import { useEffect, useState, useMemo, useContext, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MapProps } from './type';
import { useMap } from './useMap';
export { useMap };

export const Map = forwardRef<{},MapProps>(({ ...props }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setContainer, map } = useMap({});

  useEffect(() => setContainer(containerRef.current), [containerRef.current]);

  return (
    <div ref={containerRef} style={{ height: 350 }}></div>
  );
});