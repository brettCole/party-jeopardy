import Link from 'next/link';
import UserMenu from './UserMenu';

export default function JeopardyHeader() {
  return (
    <header className='flex flex-row justify-around items-center'>
      <h1 className='font-gyparody text-jeopardyYellow text-7xl m-5'>
        <Link href='/'>
          FUNPARDY
        </Link>
      </h1>
      <nav>
        {/* @ts-expect-error Server Component */}
        <UserMenu />
      </nav>
    </header>
  )
};