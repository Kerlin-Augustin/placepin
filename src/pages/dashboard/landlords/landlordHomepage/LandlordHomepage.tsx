import { useAuth } from "../../../../context/AuthContext"

const LandlordHomepage = () => {
  
  const { email } = useAuth()

  console.log(email)
  return (
    <>
      Landlord Homepage
    </>
  )
}

export default LandlordHomepage