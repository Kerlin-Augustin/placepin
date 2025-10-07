import styles from './activeTenantsCard.module.css';

interface ActiveTenantsCardProps {
  numberOfTenants: number,
  tenantsWithSubscription: number,
}

const ActiveTenantsCard = ({
  numberOfTenants,
  tenantsWithSubscription,
}: ActiveTenantsCardProps) => {

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

export default ActiveTenantsCard