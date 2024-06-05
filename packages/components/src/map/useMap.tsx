import { useEffect, useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { MapProps } from './type';

export const useMap = (props: MapProps) => {
  const [container, setContainer] = useState(props.container);
  const [map, setMap] = useState<BMap.Map>();
  const [center, setCenter] = useState(props.center || '北京');
  const [zoom, setZoom] = useState(props.zoom || 15);

  /**
   * 初始化地图
   */
  useMemo(() => {
    console.log('BMap', window.BMapGL);
    console.log('container', container);
    if (container && !map && window.BMapGL) {

      const mapInstance = new BMapGL.Map(container);
      // const center = new BMapGL.Point(113.91302875561158, 22.98839230446662);
      // mapInstance.centerAndZoom(center, 12);
      setMap(mapInstance);
    }
  }, [container, map]);

  /**
   * 设置中心点
   */
  useEffect(() => {
    if (center && map) {
      map.centerAndZoom(center, zoom);
    }
  }, [center, map]);
  return {
    container,
    setContainer,
    map,
    setMap,
    center,
    setCenter,
    zoom,
    setZoom
  };
};
