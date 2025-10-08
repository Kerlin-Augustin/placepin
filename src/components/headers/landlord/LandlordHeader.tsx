import { useState, useEffect, useRef } from "react";
import styles from './landlordHeader.module.css';
import { Settings } from 'lucide-react';
import DropdownModal from '../../modals/DropdownModal';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

interface LandlordHeaderProps {
  username: string,
}

const LandlordHeader = ({ username }: LandlordHeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleSignout = () => {
    logout()
    navigate('/')
  }

  const handleSelect = (selection: string) => {
    if (selection === "Sign out") {
      handleSignout()
    } else if (selection === "Settings") {
      console.log("Go to settings");
    }
    setShowDropdown(false);
  };

  const handleToggle = () => setShowDropdown(prev => !prev);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.landlordHeaderContainer} ref={wrapperRef}>
      <h2 className={styles.headerTitle}>
        Welcome, {username}
      </h2>
      <Settings
        size={30}
        color={'black'}
        className={styles.settingsIcon}
        onClick={handleToggle}
      />
      {showDropdown && (
        <DropdownModal
          selections={['Settings', 'Sign out']}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default LandlordHeader;
