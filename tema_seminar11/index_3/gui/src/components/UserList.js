import { useEffect, useState } from 'react'
import User from './User'
import './UserList.css'
import RegularUserList from './RegularUserList'
import PowerUserList from './PowerUserList'

const SERVER = 'http://localhost:8080'

function UserList (props) {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    console.warn(data)
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  

  return (
    <div className='user-list'>
     {/* Randăm direct aici lista 1 */}
      <h3>Regular Users</h3>
      <div className='user-list'>
        {users.filter(u => u.type === 'regular-user').map(e => <User key={e.id} item={e} />)}
      </div>

      {/* Randăm direct aici lista 2 */}
      <h3>Power Users</h3>
      <div className='user-list'>
        {users.filter(u => u.type === 'power-user').map(e => <User key={e.id} item={e} />)}
      </div>
    </div>
  )
}

export default UserList
