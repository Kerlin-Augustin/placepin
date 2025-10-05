import styles from './landlordHeader.module.css';

interface LandlordHeaderProps {
  username: string,
}

const LandlordHeader = ({username}: LandlordHeaderProps) => {
  return (
    <div className={styles.landlordHeaderContainer}>
      Welcome, {username}
    </div>
  )
}

export default LandlordHeader