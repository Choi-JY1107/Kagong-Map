import { Map } from 'ol'
import { NO_EXTENT_ERROR_MESSAGE, NO_MAP_ERROR_MESSAGE } from '../shared/constants/errorConstants';

export const getBoundingBox = async (map: Map): Promise<{ minLon: number; minLat: number; maxLon: number; maxLat: number; } | null> => {
  checkValidMap(map)

  // 현재 화면의 경계 계산
  const extent = map!.getView().calculateExtent(map.getSize())
  checkValidExtent(extent)

  const [minX, minY, maxX, maxY] = extent!

  return { minLon: minX, minLat: minY, maxLon: maxX, maxLat: maxY }
}

const checkValidMap = (map: Map | null): void => {
    if(!map) throw new Error(NO_MAP_ERROR_MESSAGE)
}

const checkValidExtent = (extent: number[]): void => {
    if (!extent) throw new Error(NO_EXTENT_ERROR_MESSAGE)
}
