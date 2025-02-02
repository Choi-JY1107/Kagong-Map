import styles from './CafeListWidget.module.css'
import { Cafe } from '../../entities/cafe'

type CafeListWidgetProps = {
  cafes: Cafe[]
  isVisible: boolean
  onClose: () => void
}

const CafeListWidget: React.FC<CafeListWidgetProps> = ({ cafes, isVisible, onClose }) => {
  return (
    <div className={`${styles.widget} ${isVisible ? styles.show : ''}`}>
      <div className={styles.header}>
        <h3>📍 주변 카페 목록</h3>
        <button onClick={onClose} className={styles.closeButton}>✖</button>
      </div>
      <ul className={styles.list}>
        {cafes.map((cafe, index) => (
          <li key={index} className={styles.listItem}>
            <h4>{cafe.name}</h4>
            <p className={styles.address}>{cafe.address}</p>
            <p className={styles.openStatus}>
              {cafe.openNow === false ? '⏳ 영업 종료' : cafe.openNow === '정보 없음' ? '❓ 영업 정보 없음' : '✅ 영업 중'}
            </p>
            <div className={styles.hours}>
              {Array.isArray(cafe.openingHours) ? (
                cafe.openingHours.length > 0 ? (
                  cafe.openingHours.map((hour, i) => (
                    <p key={i}>⏰ {hour.day} {hour.startTime} - {hour.endTime}</p>
                  ))
                ) : (
                  <p>운영 시간 정보 없음</p>
                )
              ) : (
                <p>운영 시간 정보 없음</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CafeListWidget