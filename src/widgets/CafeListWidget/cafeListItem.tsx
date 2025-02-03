import styles from './cafeListWidget.module.css'
import { Cafe } from '../../entities/cafe'

type CafeListItemProps = {
  cafe: Cafe
}

const CafeListItem: React.FC<CafeListItemProps> = ({ cafe }) => {
  return (
    <li className={styles.listItem}>
      <h4>{cafe.name}</h4>
      <p className={styles.address}>{cafe.address}</p>
      <p className={styles.openStatus}>
        {cafe.openNow === false ? '⏳ 영업 종료' : cafe.openNow === '정보 없음' ? '❓ 영업 정보 없음' : '✅ 영업 중'}
      </p>
      <div className={styles.hours}>
        {Array.isArray(cafe.openingHours) && cafe.openingHours.length > 0 ? (
          cafe.openingHours.map((hour, i) => (
            <p key={i}>⏰ {hour.day} {hour.startTime} - {hour.endTime}</p>
          ))
        ) : (
          <p>운영 시간 정보 없음</p>
        )}
      </div>
    </li>
  )
}

export default CafeListItem