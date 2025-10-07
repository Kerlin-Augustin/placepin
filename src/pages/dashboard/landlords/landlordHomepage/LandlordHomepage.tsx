import styles from './landlordHomepage.module.css';
import ActiveTenantsCard from '../../../../components/cards/landlord/ActiveTenantsCard';
import PerkAdoptionCard from '../../../../components/cards/landlord/PerkAdoptionCard';

const LandlordHomepage = () => {
  return (
    <div className={styles.landlordHomepageContainer}>
      <div className={styles.statsContainer}>
        <h3>Stats / KPI's</h3>
        <div className={styles.statsCards}>
          <ActiveTenantsCard numberOfTenants={0} tenantsWithSubscription={0}/>
          <PerkAdoptionCard />
        </div>
      </div>
    </div>
  )
}

export default LandlordHomepage