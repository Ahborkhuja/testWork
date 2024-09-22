"use client"
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useMutation } from '@apollo/client';

import { LOGIN_MUTATION } from '@/services/User/login';
import { useAuthStore } from '@/store/auth';
import AuthTile from '../../authTile';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { error }] = useMutation(LOGIN_MUTATION);
  const setTokens = useAuthStore((state) => state.setTokens);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      setTokens(data.login.access_token, data.login.refresh_token);

      router.push('/my-info/');  // Redirect after successful login
    } catch (err) {
      console.error(err);
    }
  };
  // there it works correctly in website
  const setEmailHandler = (e: ChangeEvent) => {
    setEmail(e.target.value);
  }
  const setPasswordHandler = (e: ChangeEvent) => {
    setPassword(e.target.value);
  }

  return (
    <AuthTile
      email={email}
      password={password}
      setEmail={setEmailHandler}
      setPassword={setPasswordHandler}
      handleLogin={handleLogin}
      error={error}
    />
  );
};

export default AuthPage;
