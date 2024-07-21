import { Link } from 'react-router-dom'
import './login.scss'
import { AuthContext } from '../../context/authContext';
import { useContext } from "react";

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = ()=>{
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hi My People.</h1>
          <p>Welcome! Stay connected with your friends and the world around you. If you need any help, we're here for you. Let's get you started!</p>
        <span>Don't you have an account?</span>
        <Link to="/register">
        <button>Register</button>
        </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login