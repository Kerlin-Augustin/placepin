import './landlordHeader.css';

interface LandlordHeaderProps {
  username: string,
}

const LandlordHeader = ({username}: LandlordHeaderProps) => {
  return (
    <div className="landlordHeaderContainer">
      Welcome, {username}
    </div>
  )
}

export default LandlordHeader