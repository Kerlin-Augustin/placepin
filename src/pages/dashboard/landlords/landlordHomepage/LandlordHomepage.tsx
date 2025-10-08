import styles from './landlordHomepage.module.css';
import ActiveTenantsCard from '../../../../components/cards/landlord/ActiveTenantsCard';
import PerkAdoptionCard from '../../../../components/cards/landlord/PerkAdoptionCard';
import StatsKPICard from '../../../../components/cards/landlord/StatsKPICard';

const LandlordHomepage = () => {

  const handleInvite = () => {
    console.log('Make modal popup to send email invite!')
  }

  const handleNudge = () => {
    console.log("Make a model to nudge a tenant that hasn't used a perk in awhile!")
  }

  return (
    <div className={styles.landlordHomepageContainer}>
      <div className={styles.statsContainer}>
        <h3>Stats / KPI's</h3>
        <div className={styles.statsCards}>
          <StatsKPICard title={'Active Tenants'} ctaText={'Invite Tenants'} handleClick={handleInvite}>
            <ActiveTenantsCard numberOfTenants={0} tenantsWithSubscription={0} />
          </StatsKPICard>
          <StatsKPICard title={'Perk Adoption'} ctaText={'Tip: Tenants using perks renew 20% more often.'} handleClick={handleNudge}>
            <PerkAdoptionCard />
          </StatsKPICard>
        </div>
      </div>
    </div>
  )
}

export default LandlordHomepage