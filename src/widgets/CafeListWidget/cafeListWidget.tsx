import { useState, useRef } from 'react'
import styles from './CafeListWidget.module.css'
import { Cafe } from '../../entities/cafe'
import CafeListHeader from './CafeListHeader'
import CafeList from './CafeList'

type CafeListWidgetProps = {
  cafes: Cafe[]
  isVisible: boolean
  onClose: () => void
}

const MIN_HEIGHT = 30 // 최소 높이 (30vh)
const MAX_HEIGHT = 100 // 최대 높이 (100vh)
const HIDE_THRESHOLD = 25 // 25vh 이하로 내려가면 숨김

const CafeListWidget: React.FC<CafeListWidgetProps> = ({ cafes, isVisible, onClose }) => {
  const [height, setHeight] = useState(50) // 초기 높이 50vh
  const widgetRef = useRef<HTMLDivElement>(null)

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.clientY === 0) return // 드래그가 끝나면 e.clientY가 0이 될 수 있음 → 무시

    const viewportHeight = window.innerHeight
    const newHeight = Math.max(
      MIN_HEIGHT,
      Math.min(MAX_HEIGHT, (viewportHeight - e.clientY) / viewportHeight * 100)
    )

    setHeight(newHeight)
  }

  const handleDragEnd = () => {
    if (height <= HIDE_THRESHOLD) {
      setHeight(0) // 숨김 처리
      onClose()
    }
  }

  return (
    <div
      ref={widgetRef}
      className={`${styles.widget} ${isVisible ? styles.show : ''}`}
      style={{ height: `${height}vh` }}
    >
      <div
        className={styles.draggableHeader} // ✅ 드래그 이벤트 추가
        draggable
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        <CafeListHeader onClose={onClose} />
      </div>
      <CafeList cafes={cafes} />
    </div>
  )
}

export default CafeListWidget