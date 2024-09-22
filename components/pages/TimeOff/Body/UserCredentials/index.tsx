"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { User } from '@/types/env'
import { useMutation, useQuery } from '@apollo/client';
import { Profile } from '@/services/User/myProfile';

const UserCredentials = () => {
  const { loading, error, data } = useQuery(Profile);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex w-40 justify-center gap-3 items-center" >
      <p>Name: {data.myProfile.name as string}</p>
      <Avatar>
        <AvatarImage src={data.myProfile.avatar} alt={data.myProfile.name} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserCredentials;
