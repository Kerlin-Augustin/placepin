import styles from './activeTenantsCard.module.css';

interface ActiveTenantsCardProps {
  numberOfTenants: number,
  tenantsWithSubscription: number,
}

const ActiveTenantsCard = ({
  numberOfTenants,
  tenantsWithSubscription,
}: ActiveTenantsCardProps) => {

  return (
    <>
      {!numberOfTenants
        ? <span className={styles.noTenants}>None</span>
        : <p className={styles.tenants}>{`${tenantsWithSubscription}/${numberOfTenants}`}</p>
      }
    </>
  )
}

export default ActiveTenantsCard