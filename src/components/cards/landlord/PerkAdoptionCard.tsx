import styles from './perkAdoptionCard.module.css';

interface PerkAdoptionCardProps {
  numberOfTenants: number,
  tenantsUsingPerksPercentage: number,
  mostUsedPerk: string,
}

const PerkAdoptionCard = ({
  numberOfTenants,
  tenantsUsingPerksPercentage,
  mostUsedPerk
}: PerkAdoptionCardProps) => {

  return (
    <>
      {!numberOfTenants
        ? <span className={styles.noTenants}>None</span>
        :
        <ul className={styles.cardList}>
          <li className={styles.cardItem}>
            Total Tenants: {numberOfTenants}
          </li>
          <li className={styles.cardItem}>
            Tenants Using Perks: {tenantsUsingPerksPercentage}%
          </li>
          <li className={styles.cardItem}>
            Most Popular Perk: {mostUsedPerk}
          </li>
        </ul>
      }
    </>
  )
}

export default PerkAdoptionCard