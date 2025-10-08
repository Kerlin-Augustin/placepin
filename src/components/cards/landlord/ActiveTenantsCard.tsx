interface ActiveTenantsCardProps {
  numberOfTenants: number,
  tenantsWithSubscription: number,
}

const ActiveTenantsCard = ({
  numberOfTenants,
  tenantsWithSubscription,
}: ActiveTenantsCardProps) => {

  return (
    <div>
      {!numberOfTenants
        ? <p>None</p>
        : <p>{`${tenantsWithSubscription}/${numberOfTenants}`}</p>
      }
    </div>
  )
}

export default ActiveTenantsCard