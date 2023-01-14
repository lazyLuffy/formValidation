
import { Button, TextField } from '@mui/material';
import './App.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';



function App() {
  const {values,handleChange,handleSubmit,errors,touched,handleBlur,handleReset} = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:''
    },
    validationSchema:Yup.object().shape({
      firstName:Yup.string().min(2).max(10).required('Enter your First Name'),
      lastName:Yup.string().min(2).max(15).required('Enter your Last Name'),
      email:Yup.string().email().required('Enter your Email'),
      password:Yup.string().min(6).required('Enter your Password'),
      confirmPassword:Yup.string().min(6).required('Enter your password').oneOf([Yup.ref('password'),null],'password must match')
    }),
    onSubmit:(values)=>{
      alert('submitted')
      console.log(values,'thisisvalue')
    }
    
  })

  return (
    <div className="App d-flex align-items-center justify-content-center bg-light" style={{height:'100vh'}}>
        <div className='container px-5'>
        <p className='display-3 lg-lg fw-bold fst-italic'>Register Your Form</p>
            <form className='row  gx-4 gy-4' onSubmit={handleSubmit}>
            <div className='col-6'>
            <TextField
            id="outlined-password-input"
            value={values.firstName}
            onChange={handleChange}
            label="First Name"
            name='firstName'
            type="text"
            onBlur={handleBlur}
            fullWidth
          />
          {Boolean(errors.firstName && touched.firstName)&&(
            <p className='m-0 p-0 text-start fs-6 fw-bolder border py-2 px-2 bg-light text-danger border-0 rounded'>
            {errors.firstName}
            </p>
          )}
            </div>
            <div className='col-6'>
            <TextField
            id="outlined-password-input"
            label="last Name"
            name='lastName'
            onChange={handleChange}
            value={values.lastName}
            type="text"
            onBlur={handleBlur}
            fullWidth
          />
          {Boolean(errors.lastName && touched.lastName)&&(
            <p className='m-0 p-0 text-start border py-2 px-2 bg-light text-danger border-0 rounded'>
            {errors.lastName}
            </p>
          )}
            </div>
            <div className='col-12'>
            <TextField
            id="outlined-password-input"
            label="Email"
            name='email'
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            type="email"
            fullWidth
          />
          {Boolean(errors.email && touched.email)&&(
            <p className='m-0 p-0 text-start border py-2 px-2 bg-light text-danger border-0 rounded'>
            {errors.email}
            </p>
          )}
            </div>
            <div className='col-6'>
            <TextField
            id="outlined-password-input"
            label="Password"
            name='password'
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            type="password"
            fullWidth
          />
          {Boolean(errors.password && touched.password)&&(
            <p className='m-0 p-0 text-start border py-2 px-2 bg-light text-danger border-0 rounded'>
            {errors.password}
            </p>
          )}
            </div>
            <div className='col-6'>
            <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            name='confirmPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            fullWidth
          />
          {Boolean(errors.confirmPassword && touched.confirmPassword)&&(
            <p className='m-0 p-0 text-start border py-2 px-2 bg-light text-danger border-0 rounded'>
            {errors.confirmPassword}
            </p>
          )}
          </div>
          <div className='col-6 '>
          <Button variant="contained" type='submit' fullWidth size='large'>Submit</Button>
          </div>
            <div className='col-6'>
            <Button variant="outlined"  fullWidth size='large' onClick={handleReset}>Reset</Button>
            </div>

        
            </form>
        </div>
    </div>
  );
}

export default App;
