import './Login.scss'
import { useState } from 'react'
import { Axios } from 'axios'
import { AiOutlineUser } from 'react-icons/ai'

function Login() {
  // UseState to hold our inputs
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  // Onclick let us get what the user has entered
  

  return (
    <div className='login-box'>
      <form action="">
        <h2>APROIL</h2>
        <div className="input-box">
          <span className="icon">
            <AiOutlineUser className='icon' />
          </span>
          <input type="text" name='user' id='user' />
          
        </div>
      </form>
    </div>
  )
}

export default Login