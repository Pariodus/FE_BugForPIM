"use client";
import React, { useState } from 'react';
import '@/app/register/page.css';
import userRegister from '@/libs/userRegister';

interface RegisterProps {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const RegisterForm: React.FC = () => {
  const initialFormData: RegisterProps = {
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  };

  const [formData, setFormData] = useState<RegisterProps>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const { username, email, password, phoneNumber } = formData;
      const response = await userRegister(username, email, password, phoneNumber);
      
      // Handle response from backend (if needed)
      console.log('Registration successful:', response);

      // Reset form after successful registration
      setFormData(initialFormData);
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error (if needed)
    }
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
