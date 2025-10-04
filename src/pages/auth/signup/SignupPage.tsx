import './signupPage.css';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

const SignupPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [accountType, setAccountType] = useState('')
  const [promo, setPromo] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.')
      return
    }

    if (accountType.length === 0) {
      setErrorMessage('Choose an account type')
      return
    }

    const signupInformation = {
      username,
      email,
      address,
      accountType,
      password,
      phoneNumber,
      promo,
    }

    try {
      const res = await axios.post('/api/signup', signupInformation)
      if (res.status === 201) {
        const { accessToken } = res.data
        login(email, accessToken, username)
        navigate('/dashboard')
      }
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
      console.error(err)
    }

  }

  return (
    <div className='top-container'>
      <section className='primarySection'>
        <NavLink to='/' className='nav-link'>
          <div className='signup-logo'>
            PlacePin
          </div>
        </NavLink>
        <h1 className='h1'>
          Elevating Homes, Simplifying Ownership.
        </h1>
        <ul>
          <li className='li'>
            <h4 className='h4'>Create living experiences people stay for</h4>
            <p className='p'>Increase tenant satisfaction and retention with perks, services, and streamlined communication — all from one platform.</p>
          </li>

          <li className='li'>
            <h4 className='h4'>Connect landlords and tenants through value</h4>
            <p className='p'>From flexible plans to modern tools, PlacePin strengthens relationships and boosts the appeal of every unit.</p>
          </li>

          <li className='li'>
            <h4 className='h4'>Turn your property into a lifestyle upgrade</h4>
            <p className='p'>Laundry, housekeeping, gym perks, and discounts — tenants get more than a place to stay, and landlords get happier residents.</p>
          </li>

          <li className='li'>
            <h4 className='h4'>Smarter housing starts with better tools</h4>
            <p className='p'>Track rental income, enhance tenant experience, and manage perks without the complexity of traditional systems.</p>
          </li>
        </ul>

      </section>
      <div>
        <form onSubmit={handleCreateAccount} className='heroForm'>
          <h4>
            Create your PlacePin account
          </h4>
          <label
            className='inputLabel'
            htmlFor='name'
          >
            Full Name
          </label>
          <input
            type="text"
            className='inputFields'
            onChange={(e) => setUserName(e.target.value.toLowerCase())}
            id='name'
            placeholder='Dinah Johnson'
            required
          />
          <label
            className='inputLabel'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type="text"
            className='inputFields'
            onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
            id='email'
            placeholder="djohnson@gmail.com"
            required
          />
          <label
            className='inputLabel'
            htmlFor='accountType'
          >
            Account Type
          </label>
          <select
            className="inputFields"
            onChange={(e) => setAccountType(e.target.value)}
            id="accountType"
            required
          >
            <option value="">Select one</option>
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>
          {accountType === 'tenant' && <>
            <label
              className='inputLabel'
              htmlFor='landlordPromo'
            >
              Landlord Promo Code
            </label>
            <input
              type="text"
              className='inputFields'
              onChange={(e) => setPromo(e.target.value.toLowerCase().trim())}
              id='landlordPromo'
              placeholder='1234-abc-5678 (Optional)'  />
          </>}
          <label
            className='inputLabel'
            htmlFor='address'
          >
            Address
          </label>
          <input
            type="text"
            className='inputFields'
            onChange={(e) => setAddress(e.target.value.toLowerCase().trim())}
            id='address'
            placeholder='123 Main Street, Boston MA, 02136'
            required
          />
          <label
            className='inputLabel'
            htmlFor='phoneNumber'
          >
            Phone Number
          </label>
          <input
            type="number"
            className='inputFields'
            onChange={(e) => setPhoneNumber(e.target.value.toLowerCase().trim())}
            id='phoneNumber'
            placeholder='617-555-5555'
            required
          />
          <label
            className='inputLabel'
            htmlFor='password'
          >
            Password
          </label>
          <input
            type="password"
            className='inputFields'
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            placeholder='********'
            required
          />
          <br />
          <button>Submit</button>
          <p>Have an account? <NavLink to='/login'>Login</NavLink></p>
          <p className='errorMessage inputLabel'>{errorMessage}</p>
        </form>
      </div>
    </div>
  )
}

export default SignupPage