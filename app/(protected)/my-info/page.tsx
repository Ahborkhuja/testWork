"use client"
import UserCredentials from '@/components/pages/TimeOff/Body/UserCredentials'
import client from '@/lib/client'
import { ApolloProvider } from '@apollo/client'

const TimeOff = () => {
  return (
    <ApolloProvider client={client}>
      <UserCredentials />
    </ApolloProvider>
  )
}

export default TimeOff