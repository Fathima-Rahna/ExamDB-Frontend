// 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';

function Auth() {


  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    gender: '',
    mobile: '',
    password: '',
    dateofbirth: '',
    course: ''
  });

  
  const handleRegister = async (e) => {
    e.preventDefault();
    const { firstname, lastname, address, email, gender, mobile, password, dateofbirth, course } = userInputs;
    if (firstname && lastname && address && email && gender && mobile && password && dateofbirth && course) {
      try {
        const result = await registerAPI(userInputs);
        if (result.status === 200) {
          toast.success(`Welcome ${result.data.firstname}! Please login to explore our website.`);
          setUserInputs({ firstname: '', lastname: '', address: '', email: '', gender: '', mobile: '', password: '', dateofbirth: '', course: '' });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          if (result.response && result.response.data && result.response.data.errors) {
            // Handle validation errors
            const validationErrors = result.response.data.errors;
            let errorMessage = '';
            Object.keys(validationErrors).forEach(key => {
              errorMessage += `${key}: ${validationErrors[key]}\n`;
            });
            toast.error(errorMessage);
          } else {
            toast.error("Registration failed. Please try again later.");
          }
          setTimeout(() => {
            setUserInputs({ firstname: '', lastname: '', address: '', email: '', gender: '', mobile: '', password: '', dateofbirth: '', course: '' });
          }, 2000);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.warning("Please fill the form completely");
    }
  };
  
  
  

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder'>
          <i className='fa-solid fa-arrow-left'></i>Back to Home</Link>
        <div className="card shadow p-5">
        <h1 style={{ fontSize: '40px',textAlign:"center" }}><i className="fa-brands fa-pagelines"></i>Apply as a student</h1>
              <h5 className=' fw-bolder mt-2'>
                Register for an account
              </h5>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Form>
              <FloatingLabel controlId="floatingInput" label="FirstName" className="mb-3">
                  <Form.Control value={userInputs.firstname} onChange={e => setUserInputs({ ...userInputs, firstname: e.target.value })} type="text" placeholder="FirstName" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="LastName" className="mb-3">
                  <Form.Control value={userInputs.lastname} onChange={e => setUserInputs({ ...userInputs, lastname: e.target.value })} type="text" placeholder="LastName" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                  <Form.Control value={userInputs.address} onChange={e => setUserInputs({ ...userInputs,address: e.target.value })} type="text" placeholder="Address" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Gender" className="mb-3">
                  <Form.Control value={userInputs.gender} onChange={e => setUserInputs({ ...userInputs, gender: e.target.value })} type="text" placeholder="gender" />
                </FloatingLabel>
              </Form>
            </div>
            <div className="col-lg-6">
              
              <Form>
                <FloatingLabel controlId="floatingInput" label="Mobile" className="mb-3">
                  <Form.Control value={userInputs.mobile} onChange={e => setUserInputs({ ...userInputs, mobile: e.target.value })} type="" placeholder="Mobile" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password"  className="mb-3">
                  <Form.Control value={userInputs.password} onChange={e => setUserInputs({ ...userInputs, password: e.target.value })} type="password" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Date of Birth"  className="mb-3">
                  <Form.Control value={userInputs.dateofbirth} onChange={e => setUserInputs({ ...userInputs,  dateofbirth: e.target.value })} type="text" placeholder="Date of birth" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="course"  className="mb-3">
                  <Form.Control value={userInputs.course} onChange={e => setUserInputs({ ...userInputs, course: e.target.value })} type="text" placeholder="course" />
                </FloatingLabel>
                <div className="mt-3">
                  <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                  <button className='btn btn-secondary ms-2 mb-2'>Cancel</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  );
}

export default Auth;
