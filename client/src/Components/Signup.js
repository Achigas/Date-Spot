import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const SignUp = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(userFormData);
      console.log(userFormData)
      console.log(response)

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    <div id="sign-up">
    <div className="login-head" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
      <h2>Sign Up</h2><br></br>
      </div>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
       <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Form.Group className="form">
          <Form.Label htmlFor='username'>Username:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>
        </div>

       <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Form.Group className="form">
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Form.Group className="form">
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        </div><br></br>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Form.Group className="form">
        <Form.Label>
          Choose your city: 
        </Form.Label>
          <select value={userFormData.city} name='city' onChange={handleInputChange} required >
            <option value="292">Chicago</option>
            <option value="280">Los Angeles</option>
            <option value="291">Miami</option>
            <option value="280">New York City</option>
          </select>
        </Form.Group>
        </div><br></br>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Button
        className="form"
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='warning'>
          Submit
        </Button>
        </div>
      </Form>
      </div>
    </>
  );
};

export default SignUp;
