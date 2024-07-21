import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Daperk Social</h1>
          <p>Welcome! Stay connected with your friends and the world around you. If you need any help, we're here for you. Let's get you started!</p>
        <span>Do you have an account?</span>
        <Link to="/login">
        <button>Login</button>
        </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register