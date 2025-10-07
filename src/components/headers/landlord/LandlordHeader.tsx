import styles from './landlordHeader.module.css';

interface LandlordHeaderProps {
  username: string,
}

const LandlordHeader = ({ username }: LandlordHeaderProps) => {

  return (
    <div className={styles.landlordHeaderContainer}>
      <h2>
        Welcome, {username}
      </h2>
    </div>
  )
}

export default LandlordHeader