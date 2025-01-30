import { useRef } from 'react'
import OpenLayersMap from '../widgets/OpenLayersMap/openLayersMap'
import { getBoundingBox } from '../features/getBoundingBox'
import Map from 'ol/Map'
import styles from './HomePage.module.css'
import { BoundingBox, fetchCafeList } from '../features/api/cafeAPI'

const HomePage = () => {
  const mapRef = useRef<Map | null>(null)

  const handleGetBoundingBox = async () => {
    if (!mapRef.current) return

    const boundingBox = await getBoundingBox(mapRef.current)
    console.log('Bounding Box:', boundingBox)
    
    const result = await fetchCafeList(boundingBox as BoundingBox)
    console.log('Cafe List:', result)
    alert('카페 목록을 가져왔습니다. 콘솔을 확인해주세요.')
  }

  return (
    <div className={styles.container}>
      <OpenLayersMap mapRef={mapRef} />
      <button className={styles['extract-button']} onClick={handleGetBoundingBox}>
        현재 위치 추출하기
      </button>
    </div>
  )
}

export default HomePage