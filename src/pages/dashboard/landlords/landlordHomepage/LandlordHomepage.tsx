import styles from './landlordHomepage.module.css';
import ActiveTenants from '../../../../components/cards/landlord/ActiveTenants';

const LandlordHomepage = () => {
  return (
    <div className={styles.landlordHomepageContainer}>
      <div className={styles.statsContainer}>
        <h3>Stats / KPI's</h3>
        <div className={styles.statsCards}>
          <ActiveTenants numberOfTenants={0} tenantsWithSubscription={0}/>
        </div>
      </div>
    </div>
  )
}

export default LandlordHomepage