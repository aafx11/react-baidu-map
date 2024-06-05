/**
 * 基础类
 */
declare global {
  interface Window {
    BMap: typeof BMap;
  }
}

declare namespace BMap {
  /**
   * 此类表示一个地理坐标点。
   */
  class Point {
    /**
     * 以指定的经度和纬度创建一个地理点坐标。
     * @param lng
     * @param lat
     * @returns {}
     */
    constructor(lng: number, lat: number);

    /**
     * 地理经度。
     */
    lng: number;
    /**
     * 地理纬度。
     */
    lat: number;

    /**
     * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true。
     * @param other
     * @returns {}
     */
    equals(other: Point): boolean;
  }

  /**
   * 此类表示地图上的一点，单位为像素。
   */
  class Pixel {
    /**
     * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角。
     * @param x
     * @param y
     * @returns {}
     */
    constructor(x: number, y: number);

    /**
     * x坐标。
     */
    x: number;
    /**
     * y坐标。
     */
    y: number;

    /**
     * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true。
     */
    equals(other: Pixel): boolean;
  }

  /**
   * 此类表示地理坐标的矩形区域。
   */
  class Bounds {
    /**
     * 创建一个包含所有给定点坐标的矩形区域。(自 1.2 废弃)
     * @param minX
     * @param minY
     * @param maxX
     * @param maxY
     * @returns {}
     */
    constructor(minX: number, minY: number, maxX: number, maxY: number);

    /**
     * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角。(自 1.2 新增)
     * @param sw
     * @param ne
     * @returns {}
     */
    constructor(sw: Point, ne: Point);

    /**
     * 矩形左下角的x坐标。(自1.2废弃)
     */
    minX: number;
    /**
     * 矩形左下角的y坐标。(自1.2废弃)
     */
    minY: number;
    /**
     * 矩形右上角的x坐标。(自1.2废弃)
     */
    maxX: number;
    /**
     * 矩形右上角的y坐标。(自1.2废弃)
     */
    maxY: number;

    /**
     * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true。
     * @param other
     * @returns {}
     */
    equals(other: Bounds): boolean;

    /**
     * 如果点的地理坐标位于此矩形内，则返回true。
     * @param point
     * @returns {}
     */
    containsPoint(point: Point): boolean;

    /**
     * 传入的矩形区域完全包含于此矩形区域中，则返回true。
     * @param bounds
     * @returns {}
     */
    containsBounds(bounds: Bounds): boolean;

    /**
     * 计算与另一矩形的交集区域。
     * @param other
     * @returns {}
     */
    intersects(other: Bounds): Bounds;

    /**
     * 放大此矩形，使其包含给定的点。
     * @param point
     * @returns {}
     */
    extend(point: Point): void;

    /**
     * 返回矩形的中心点。
     * @returns {}
     */
    getCenter(): Point;

    /**
     * 如果矩形为空，则返回true。
     * @returns {}
     */
    isEmpty(): boolean;

    /**
     * 返回矩形区域的西南角。(自 1.2 新增)
     * @returns {}
     */
    getSouthWest(): Point;

    /**
     * 返回矩形区域的东北角。(自 1.2 新增)
     * @returns {}
     */
    getNorthEast(): Point;

    /**
     * 返回矩形区域的跨度。(自 1.2 新增)
     * @returns {}
     */
    toSpan(): Point;
  }

  /**
   * 此类以像素表示一个矩形区域的大小。
   */
  class Size {
    /**
     * 以指定的宽度和高度创建一个矩形区域大小对象。
     * @param width
     * @param height
     * @returns {}
     */
    constructor(width: number, height: number);

    /**
     * 水平方向数值。
     */
    width: number;
    /**
     * 竖直方向的数值。
     */
    height: number;

    /**
     * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true。
     * @param other
     * @returns {}
     */
    equals(other: Size): boolean;
  }
}

// export {  };
