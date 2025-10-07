import styles from './activeTenants.module.css';

interface ActiveTenantsProps {
  numberOfTenants: number,
  tenantsWithSubscription: number,
}

const ActiveTenants = ({
  numberOfTenants,
  tenantsWithSubscription,
}: ActiveTenantsProps) => {

  const handleInvite = () => {

  }

  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.activeTenants}>Active Tenants</h4>
      {!numberOfTenants
        ? <p className={styles.noTenants}>None</p>
        : <p className={styles.activeSubs}>{`${tenantsWithSubscription}/${numberOfTenants}`}</p>
      }
      <p
          className={styles.inviteTenants}
          onClick={handleInvite}
        >
          Invite Tenants
        </p>
    </div>
  )
}

export default ActiveTenants