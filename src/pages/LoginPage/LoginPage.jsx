import React from 'react';
import LoginForm from '../../components/LoginForm';
import MainTitle from '../../components/MainTitle/MainTitle';

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <MainTitle />
      <LoginForm />
    </div>
  );
}
