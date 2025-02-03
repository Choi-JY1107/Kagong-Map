import styles from './cafeListWidget.module.css'
import { Cafe } from '../../entities/cafe'
import CafeListItem from './cafeListItem'

type CafeListProps = {
  cafes: Cafe[]
}

const CafeList: React.FC<CafeListProps> = ({ cafes }) => {
  return (
    <ul className={styles.list}>
      {cafes.length > 0 ? (
        cafes.map((cafe, index) => <CafeListItem key={index} cafe={cafe} />)
      ) : (
        <p className={styles.emptyMessage}>카페 목록이 없습니다.</p>
      )}
    </ul>
  )
}

export default CafeList