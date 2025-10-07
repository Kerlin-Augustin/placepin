import styles from './landlordHeader.module.css';
import { Settings } from 'lucide-react';

interface LandlordHeaderProps {
  username: string,
}

const LandlordHeader = ({ username }: LandlordHeaderProps) => {

  return (
    <div className={styles.landlordHeaderContainer}>
      <h2 className={styles.headerTitle}>
        Welcome, {username}
      </h2>
      <Settings
        size={30}
        color={'black'}
        className={styles.settingsIcon}
      />
    </div>
  )
}

export default LandlordHeader