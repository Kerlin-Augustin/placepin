import type { FormEvent } from "react";
import styles from './basicInfoForm.module.css';

const BasicInfoForm = () => {

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
              type='text'
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
              type='text'
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