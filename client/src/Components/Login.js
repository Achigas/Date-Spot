// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
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
      const response = await loginUser(userFormData);

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
    <div id="login">
      <div className="login-head" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
      <h2>Log In</h2><br></br>
      </div>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
        <Form.Group className="form" >
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
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
        }} >
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
        <div className="button">
        <Button
         className="form-button"
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
         >
          Submit
        </Button>
        </div>
      </Form>
      </div>
    </>
  );
};

export default Login;