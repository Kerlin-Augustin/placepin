import styles from './perkAdoptionCard.module.css';

const PerkAdoptionCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.cardTitle}>Perk Adoption</h4>
      <ul className={styles.cardList}>
        <li className={styles.cardItem}>
          Total Tenants: {32}
        </li>
        <li className={styles.cardItem}>
          Tenants Using Perks: {'62%'}
        </li>
        <li className={styles.cardItem}>
          Most Popular Perk: {'Laundry Pickup'}
        </li>
      </ul>
      <p className={styles.tip}>Tip: Tenants using perks renew 20% more often.</p>
    </div>
  )
}

export default PerkAdoptionCard