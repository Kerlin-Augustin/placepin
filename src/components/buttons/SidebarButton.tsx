import './sidebarButton.css';

interface SidebarButtonProps {
  buttonText: string
}

function SidebarButton({buttonText}: SidebarButtonProps) {

  return (
    <div className="sidebarButton">
      <h2 className='sidebarButtonText'>{buttonText}</h2>
    </div>
  )
}

export default SidebarButton