import { useEffect, useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { MapProps } from './type';

export const useMap = (props: MapProps) => {
  const [container, setContainer] = useState(props.container);
  const [map, setMap] = useState();

  useMemo(() => {
    if (container && !map && BMap) {
      const instance = new BMap(container);

      setMap(instance);
    }
  }, [container, map]);

  return {
    container,
    setContainer,
    map,
    setMap
  };
};
