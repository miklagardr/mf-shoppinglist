import { Link , useNavigate} from 'react-router-dom';
import { createUser } from '../store';
import {useFormik} from 'formik';
import { Alert } from '@mui/material';
import { useState } from 'react';
import './style.css';


function SignUp() {

  const navigate = useNavigate();
  const [alertComponent , setAlertComponent] = useState(null); 

const formik = useFormik({
  initialValues: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    membership: 'free', 
  },
  validate: values => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Please enter valid email';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Password confirm is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords not matched';
    }
    return errors;
  },
  onSubmit:  (values) => {
    if(values.membership === 'premium') {
      values.membership = true;
    
    }else{
      values.membership = false;
    }
    createUser(values.username, values.email, values.password, values.membership)
    .then((response) => {
      setAlertComponent(<Alert severity="success">{response}</Alert>)
      setTimeout(() => {
        navigate('/')  
      },1000);
    })
  .catch((error) => {
      setAlertComponent(<Alert severity="error">{error.response.data}</Alert>)
  });
  },
});

return (
  <div id='signuppage' className='flex items-center justify-center h-screen bg-gray-100 ' >
    <div className='bg-slate-200 w-full max-w-md p-8 rounded shadow-md py-15'>
      <h1 className='text-2xl font-semibold mb-6 text-center'>Sign Up</h1>
      <form onSubmit={formik.handleSubmit} className='text-left'>
        <div className='mb-4'>
          <label htmlFor='username' className='block text-gray-700'>Username</label>
          <input
            onChange={formik.handleChange}
            type='text'
            id='username'
            
            value={formik.values.username}
            className='w-full border p-3 rounded focus:outline-none focus:border-blue-500'
          />
          {formik.errors.username && <div className='text-red-500'>{formik.errors.username}</div>}
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700'>Email</label>
          <input
            onChange={formik.handleChange}
            type='text'
            id='email'
            value={formik.values.email}
            className='w-full border p-3 rounded focus:outline-none focus:border-blue-500'
          />
          {formik.errors.email && <div className='text-red-500'>{formik.errors.email}</div>}
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700'>Password</label>
          <input
            onChange={formik.handleChange}
            type='password'
            id='password'
            value={formik.values.password}
            className='w-full border p-3 rounded focus:outline-none focus:border-blue-500'
          />
          {formik.errors.password && <div className='text-red-500'>{formik.errors.password}</div>}
        </div>
        
        <div className='mb-4'>
          <label htmlFor='confirmpassword' className='block text-gray-700'>Confirm Password</label>
          <input
            onChange={formik.handleChange}
            type='password'
            id='confirmPassword'
            value={formik.values.confirmPassword}
            className='w-full border p-3 rounded focus:outline-none focus:border-blue-500'
          />
          {formik.errors.confirmPassword && <div className='text-red-500'>{formik.errors.confirmPassword}</div>}
        </div>
        <div className='mb-6'>
          <label htmlFor='membership' className='block text-gray-700'>Membership</label>
          <select
            onChange={formik.handleChange}
            id='membership'
            name='membership'
            value={formik.values.membership}
            className='w-full border p-3 rounded focus:outline-none focus:border-blue-500'
          >
            <option value='free'>Free</option>
            <option value='premium'>Premium</option>
          </select>
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600 transition duration-300'>Sign Up</button>
        <p className='mt-2 text-gray-600 text-center'>
          Already have an account? <Link to="/" className='text-blue-500'>Login</Link>
        </p>
      </form>
      <div className='mt-3'>
      {alertComponent}
      </div>
      
    </div>
  </div>
);
}

export default SignUp;
