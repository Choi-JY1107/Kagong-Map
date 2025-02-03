import styles from './CafeListWidget.module.css'
import { Cafe } from '../../entities/cafe'
import CafeListHeader from './cafeListHeader'
import CafeList from './cafeList'

type CafeListWidgetProps = {
  cafes: Cafe[]
  isVisible: boolean
  onClose: () => void
}

const CafeListWidget: React.FC<CafeListWidgetProps> = ({ cafes, isVisible, onClose }) => {
  return (
    <div className={`${styles.widget} ${isVisible ? styles.show : ''}`}>
      <CafeListHeader onClose={onClose} />
      <CafeList cafes={cafes} />
    </div>
  )
}

export default CafeListWidget