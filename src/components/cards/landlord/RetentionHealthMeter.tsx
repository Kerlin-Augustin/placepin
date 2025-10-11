import styles from './retentionHealthMeter.module.css';

interface RetentionHealthMeterProps {
  retentionHealth: string,
  value: number,
  numberOfTenants: number
}

const RetentionHealthMeter = ({ retentionHealth, value, numberOfTenants }: RetentionHealthMeterProps) => {

  let stateClass = '';
  if (value < 50) stateClass = styles.bad;
  else if (value < 80) stateClass = styles.warn;
  else stateClass = styles.good;

  return (
    !numberOfTenants
      ? <span className={styles.noTenants}>None</span>
      :
      <div className={styles.container}>
        <label htmlFor='retention'>
          {retentionHealth}
        </label>
        <meter
          id="retention"
          min={0}
          max={100}
          value={value}
          className={`${styles.meter} ${stateClass}`}
        >
        </meter>
      </div>
  )
}

export default RetentionHealthMeter