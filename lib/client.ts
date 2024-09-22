"use client"
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, Observable } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useAuthStore } from '@/store/auth';
import { getRefreshToken } from '../utils/getRefreshToken';
import promiseToObservable from '@/utils/promiseToObservable';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = useAuthStore.getState().accessToken;
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    },
  };
});


const refreshLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors && graphQLErrors.some(err => err.message === 'UNAUTHENTICATED')) {
    try {
      // Update both tokens
      const access_token = promiseToObservable(getRefreshToken());
      console.log(access_token);

      // Set the new access token in the request header
      operation.setContext({
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      // Retry the operation with the new token
      return forward(operation);
    } catch (error) {
      console.error('Token refresh failed', error);
      throw error;
    }
  }
});


const client = new ApolloClient({
  link: ApolloLink.from([authLink, refreshLink, httpLink]),
  cache: new InMemoryCache(),
  
});

export default client;


