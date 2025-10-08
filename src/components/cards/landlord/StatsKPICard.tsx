import type { ReactNode } from "react";
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
      <div className={styles.cardBody}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <div className={styles.childrenContainer}>
          {children}
        </div>
      </div>
      <div className={styles.ctaSection}>
        <p
          className={styles.ctaText}
          onClick={handleClick}
        >
          {ctaText}
        </p>
      </div>
    </div>
  )
}

export default StatsKPICard