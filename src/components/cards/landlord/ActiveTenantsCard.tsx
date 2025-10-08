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
    <div>
      {!numberOfTenants
        ? <span className={styles.noTenants}>None</span>
        : <p>{`${tenantsWithSubscription}/${numberOfTenants}`}</p>
      }
    </div>
  )
}

export default ActiveTenantsCard