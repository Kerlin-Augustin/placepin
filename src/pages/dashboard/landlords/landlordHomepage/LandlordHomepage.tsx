import styles from './landlordHomepage.module.css';
import ActiveTenantsCard from '../../../../components/cards/landlord/ActiveTenantsCard';
import PerkAdoptionCard from '../../../../components/cards/landlord/PerkAdoptionCard';
import StatsKPICard from '../../../../components/cards/landlord/StatsKPICard';
import RetentionHealthMeter from '../../../../components/cards/landlord/RetentionHealthMeter';

const LandlordHomepage = () => {

  const handleInvite = () => {
    console.log('Make modal popup to send email invite!')
  }

  const handleNudge = () => {
    console.log("Make a modal to nudge a tenant that hasn't used a perk in awhile!")
  }

  const handleGift = () => {
    console.log('Make a modal to gift a perk to a tenant!')
  }

  return (
    <div className={styles.landlordHomepageContainer}>
      <div className={styles.statsContainer}>
        <h3 className={styles.level3Header}>Stats / KPI's</h3>
        <div className={styles.statsCards}>
          <StatsKPICard
            title={'Active Tenants'}
            ctaText={'Invite Tenants'}
            handleClick={handleInvite}
          >
            <ActiveTenantsCard
              numberOfTenants={1}
              tenantsWithSubscription={0}
            />
          </StatsKPICard>
          <StatsKPICard
            title={'Perk Adoption'}
            ctaText={'Tip: Tenants using perks renew 20% more often.'}
            handleClick={handleNudge}
          >
            <PerkAdoptionCard
              numberOfTenants={0}
              tenantsUsingPerksPercentage={0}
              mostUsedPerk={''}
            />
          </StatsKPICard>
          <StatsKPICard
            title={'Retention Health Meter'}
            ctaText={'Tip: Help keep a tenant longer with a perk!'}
            handleClick={handleGift}
          >
            <RetentionHealthMeter numberOfTenants={0} retentionHealth='High' value={80}/>
          </StatsKPICard>
        </div>
      </div>
    </div>
  )
}

export default LandlordHomepage