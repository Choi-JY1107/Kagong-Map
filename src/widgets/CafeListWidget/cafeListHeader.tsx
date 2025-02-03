import styles from './cafeListWidget.module.css'

type CafeListHeaderProps = {
  onClose: () => void
}

const CafeListHeader: React.FC<CafeListHeaderProps> = ({ onClose }) => {
  return (
    <div className={styles.header}>
      <h3>📍 주변 카페 목록</h3>
      <button onClick={onClose} className={styles.closeButton}>✖</button>
    </div>
  )
}

export default CafeListHeader