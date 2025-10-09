import styles from './profileImage.module.css';
import { Camera } from 'lucide-react';

const ProfileImage = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Camera
          size={32}
        />
      </div>
        <p className={styles.photoText}>Upload Photo</p>
    </div>
  )
}

export default ProfileImage