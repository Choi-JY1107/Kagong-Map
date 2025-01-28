import { useRef } from 'react'
import OpenLayersMap from '../widgets/OpenLayersMap/openLayersMap'
import { getBoundingBox } from '../features/getBoundingBox'
import Map from 'ol/Map'
import styles from './HomePage.module.css'

const HomePage = () => {
  const mapRef = useRef<Map | null>(null)

  const handleGetBoundingBox = () => {
    if (!mapRef.current) return

    const boundingBox = getBoundingBox(mapRef.current)
    if (boundingBox) {
      console.log('Bounding Box:', boundingBox)
      alert(`Min Lan Lot : ${boundingBox.minLon}, ${boundingBox.minLat}\nMax Lan Lot : ${boundingBox.maxLon}, ${boundingBox.maxLat}`)
    }
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