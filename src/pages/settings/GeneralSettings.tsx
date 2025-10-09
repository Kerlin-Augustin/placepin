import styles from './generalSetting.module.css';
import ProfileImage from './ProfileImage';

const GeneralSettings = () => {
  return (
    <div className={styles.entireContainer}>
      <h2>
        General Settings
      </h2>
      <div className={styles.innerContainer}>
        <div className={styles.settingsNav}>
          <p>Basic Information</p>
          <p>Bank Settings</p>
        </div>
        <div className={styles.mainContent}>
          <ProfileImage />
        </div>
      </div>
    </div>
  )
}

export default GeneralSettings