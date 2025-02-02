import { useRef, useState } from 'react'
import OpenLayersMap from '../widgets/OpenLayersMap/openLayersMap'
import { getBoundingBox } from '../features/getBoundingBox'
import Map from 'ol/Map'
import styles from './HomePage.module.css'
import { BoundingBox, fetchCafeList } from '../features/api/cafeAPI'
import CafeListWidget from '../widgets/CafeListWidget/cafeListWidget'
import { Cafe } from '../entities/cafe'

const HomePage = () => {
  const mapRef = useRef<Map | null>(null)
  const [cafeList, setCafeList] = useState<Cafe[]>([]) // 카페 목록 상태 관리
  const [isVisible, setIsVisible] = useState(false) // 위젯 표시 여부

  const handleGetBoundingBox = async () => {
    if (!mapRef.current) return

    const boundingBox = await getBoundingBox(mapRef.current)
    console.log('Bounding Box:', boundingBox)
    
    const result: Cafe[] = await fetchCafeList(boundingBox as BoundingBox)
    console.log('Cafe List:', result)

    setCafeList(result)
    setIsVisible(true) // 위젯을 보여줌
  }

  return (
    <div className={styles.container}>
      <OpenLayersMap mapRef={mapRef} />
      <button className={styles['extract-button']} onClick={handleGetBoundingBox}>
        현재 위치 추출하기
      </button>
      <CafeListWidget cafes={cafeList} isVisible={isVisible} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />
    </div>
  )
}

export default HomePage