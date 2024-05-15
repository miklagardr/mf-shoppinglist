import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginUser } from '../store';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { Alert } from '@mui/material';


function LoginPage() {
  const {redirect} = useSelector((state) => {
    return state.user; 
  })
  const [alerts , setAlerts] = useState(false); 
 
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },

    onSubmit: async (values) => {
      const user = {
        username : values.username,
        password : values.password,
      }
      dispatch(loginUser(user))
      .unwrap()
      .catch(() => {
        setAlerts(true)
      })
  }
  })

  setTimeout(() => {
    setAlerts(false)
  },4000)

  useEffect(() => {
    if(redirect){
      navigate("/home")
    }
  },[redirect])


  return (
    <div id='loginpage' className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-slate-200 w-full max-w-md p-8 rounded shadow-md'>
        <h1 className='text-2xl font-semibold mb-6 text-center'>Welcome Back!</h1>
        <form onSubmit={formik.handleSubmit} className='text-left'>
          <div className=''>
            <label htmlFor='username' className='block text-gray-700'>Username</label>
            <input 
            onChange={formik.handleChange} 
            value={formik.values.username} 
            type='text' 
            id='username' 
            className='w-full border p-3 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          {formik.errors.username && <div className='text-red-500 mb-4'>{formik.errors.username}</div>}
          <div className=''>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input 
            onChange={formik.handleChange} 
            value={formik.values.password} 
            type='password'
            id='password' 
             className='w-full border p-3 rounded focus:outline-none focus:border-blue-500'/>
          </div>
          {formik.errors.password && <div className='text-red-500 mb-4'>{formik.errors.password}</div>}
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600 transition duration-300 mt-4'>Login</button>
          <p className='mt-2 text-gray-600 text-center'>
            Don't have an account? <Link to="/signup" className='text-blue-500'>Sign Up</Link>
          </p>
          {alerts && <Alert  className='mt-4' severity='warning'>Wrong Password or Username</Alert> }
        </form>
        <div className='mt-3'>
      </div>
      
      </div>
    </div>
  );
}

export default LoginPage;
