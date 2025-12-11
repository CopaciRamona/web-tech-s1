import User from './User'

function PowerUserList(props) {
  const { userList } = props

  return (
    <div className='power-user-section'>
      <h3>Power Users</h3>
      {
        userList.map(e => <User key={e.id} item={e} />)
      }
    </div>
  )
}

export default PowerUserList