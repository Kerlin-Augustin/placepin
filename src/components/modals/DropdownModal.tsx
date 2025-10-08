import { type ReactNode } from "react";
import styles from './dropdownModal.module.css';

interface DropdownModalProps {
  children?: ReactNode;
  selections: string[];
  onSelect?: (selection: string) => void;
}

const DropdownModal = ({
  children,
  selections,
  onSelect,
}: DropdownModalProps) => {
  return (
    <div className={styles.container}>
      {selections.map((selection, i) => (
        <p
          key={i}
          className={styles.item}
          onClick={() => onSelect?.(selection)}
        >
          {selection}
        </p>
      ))}
      {children}
    </div>
  )
}

export default DropdownModal;
