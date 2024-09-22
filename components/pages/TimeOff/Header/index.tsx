import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Search, Settings, HelpCircle, Bell } from 'lucide-react';

const MyInfoHeader = () => {
  return (
    <header className='flex gap-2 justify-between items-center w-full'>
      <Image src='/public/vercel.svg' alt='' />
      <nav className='flex justify-between items-center'>
        <Link href="./" className='p-2'>Home</Link>
        <Link href="./" className='p-2 bg-blue-400'>My Info</Link>
        <Link href="./" className='p-2'>People</Link>
        <Link href="./" className='p-2'>Hiring</Link>
        <Link href="./" className='p-2'>Reports</Link>
        <Link href="./" className='p-2'>Files</Link>
      </nav>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <Settings className='p-2' />
      <HelpCircle className='p-2' />
      <Bell className='p-2' />
      <Avatar>
        <AvatarImage src='/public/next.svg' alt='next'></AvatarImage>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  )
}

export default MyInfoHeader