import styles from './perkAdoptionCard.module.css';

const PerkAdoptionCard = () => {
  return (
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
  )
}

export default PerkAdoptionCard