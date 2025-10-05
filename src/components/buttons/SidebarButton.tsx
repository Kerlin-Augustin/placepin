import styles from './sidebarButton.module.css';

interface SidebarButtonProps {
  buttonText: string
}

function SidebarButton({buttonText}: SidebarButtonProps) {

  return (
    <div className={styles.sidebarButton}>
      <h2 className={styles.sidebarButtonText}>{buttonText}</h2>
    </div>
  )
}

export default SidebarButton