import React, { FC } from 'react';
import Link from 'next/link';

import { Bars3Icon } from '@heroicons/react/24/outline';

const UserMenu: FC = () => {
  
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className='btn btn-ghost rounded-none'>
        <Bars3Icon className='h-9 cursor-pointer text-jeopardyYellow' />
      </label>
      <ul tabIndex={0} className='menu dropdown-content z-[1] p-2 bg-neutral rounded-none shadow w-52 mt-4'>
        <li><Link className='rounded-none text-jeopardyYellow hover:text-jeopardyYellow' href='/login'>Login</Link></li>
        <li><Link className='rounded-none text-jeopardyYellow hover:text-jeopardyYellow' href='/signup'>Sign Up</Link></li>
      </ul>
    </div>
  )
}

export default UserMenu;
