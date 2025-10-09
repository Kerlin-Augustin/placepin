import { type FormEvent, useEffect, useState } from "react";
import styles from './basicInfoForm.module.css';
import axios from 'axios';
import { useAuth } from "../../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { type DecodedAccessToken } from "../../dashboard/landlords/LandlordDashboard";
import { Navigate } from "react-router-dom";

const BasicInfoForm = () => {

  const [fullName, setFullName] = useState('');
  const [pnoneNumber, setPhoneNumber] = useState(0);
  const [gender, setGender] = useState('');
  const [DoB, setDoB] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { accessToken } = useAuth()

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  const decodedToken = jwtDecode<DecodedAccessToken>(accessToken);
  const userID = decodedToken.userID;

  useEffect(() => {
    const fetchUserID = async () => {
      try {
        const res = await axios.get(`/api/landlordsetting/${userID}`)
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchUserID()
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <label
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={styles.inputFields}
              type='text'
              id='name'
            />
          </div>
          <div className={styles.formRow}>
            <label
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className={styles.inputFields}
              type='tel'
              id="phone"
            />
          </div>
          <div className={styles.formRow}>
            <label
              htmlFor="gender"
            >
              Gender
            </label>
            <input
              className={styles.inputFields}
              type='text'
              id="gender"
            />
          </div>
          <div className={styles.formRow}>
            <label
              htmlFor="DoB"
            >
              Date of Birth
            </label>
            <input
              className={styles.inputFields}
              type='date'
              id="DoB"
            />
          </div>
          <div className={styles.formRow}>
            <label
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={styles.inputFields}
              type='text'
              id="username"
            />
          </div>
          <div className={styles.formRow}>
            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={styles.inputFields}
              type='text'
              id="password"
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default BasicInfoForm