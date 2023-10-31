import React from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth';

export default async function UserMenu() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const email = user?.email;
  console.log('testing session values again => ', session)
  console.log('session user => ', email);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className='btn btn-ghost rounded-none'>
        <Bars3Icon className='h-9 cursor-pointer text-jeopardyYellow' />
      </label>
      {
        session !== null && email !== '' ?
          <ul tabIndex={0} className='menu dropdown-content z-[1] p-2 bg-neutral rounded-none shadow w-52 mt-4'>
            <li>
              <Link
                className='rounded-none text-jeopardyYellow'
                href='auth/signout'
              >
                Signout
              </Link>
            </li>
          </ul>
        :
          <ul tabIndex={0} className='menu dropdown-content z-[1] p-2 bg-neutral rounded-none shadow w-52 mt-4'>
            <li>
              <Link
                className='rounded-none text-jeopardyYellow'
                href='/api/auth/signin'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className='rounded-none text-jeopardyYellow'
                href='/api/auth/register'
              >
                Sign Up
              </Link>
            </li>
          </ul>
        }
    </div>
  )
}
