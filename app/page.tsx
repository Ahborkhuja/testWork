"use client"
import AuthPage from '../components/pages/Auth/index';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/client';

export default function Auth() {
  return (
    <ApolloProvider client={client}>
      <AuthPage />
    </ApolloProvider >

  )
}
