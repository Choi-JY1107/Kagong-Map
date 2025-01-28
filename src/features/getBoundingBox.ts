import { Map } from 'ol'

export const getBoundingBox = (map: Map): { minLon: number; minLat: number; maxLon: number; maxLat: number } | null => {
  checkValidMap(map)

  // 현재 화면의 경계 계산
  const extent = map!.getView().calculateExtent(map.getSize())
  checkValidExtent(extent)

  const [minX, minY, maxX, maxY] = extent!

  return { minLon: minX, minLat: minY, maxLon: maxX, maxLat: maxY }
}

const checkValidMap = (map: Map | null): void => {
    if(!map) throw new Error('Map 객체가 존재하지 않습니다.')
}

const checkValidExtent = (extent: number[]): void => {
    if (!extent) throw new Error('Extent가 존재하지 않습니다.')
}
