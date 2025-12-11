import User from './User'

function RegularUserList(props) {
  const { userList } = props

  return (
    <div className='regular-user-section'>
      <h3>Regular Users</h3>
      {
        userList.map(e => <User key={e.id} item={e} />)
      }
    </div>
  )
}

export default RegularUserList