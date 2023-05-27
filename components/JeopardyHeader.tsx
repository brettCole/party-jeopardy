'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function JeopardyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className='flex flex-row justify-around items-center'>
      <h1 className='font-gyparody text-jeopardyYellow text-7xl m-5'>
        <Link href='/'>
          JEOPARDY
        </Link>
      </h1>
      {menuOpen ?
        <XMarkIcon
          className='m-5 h-9 cursor-pointer'
          onClick={openMenu}
        />
      : <Bars3BottomRightIcon 
          className='m-5 h-9 cursor-pointer'
          onClick={openMenu}
        />
      }
    </header>
  )
}