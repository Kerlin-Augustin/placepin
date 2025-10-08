import type { ReactNode } from "react"
import styles from './statsKPICard.module.css';

interface StatsKPICardProps {
  title: string,
  ctaText: string,
  children: ReactNode,
  handleClick?: () => void,
}

const StatsKPICard = ({
  title,
  ctaText,
  children,
  handleClick,
}: StatsKPICardProps) => {
  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <div className={styles.childrenContainer}>
        {children}
      </div>
      <p
        className={styles.ctaSection}
        onClick={handleClick}
      >
        {ctaText}
      </p>
    </div>
  )
}

export default StatsKPICard