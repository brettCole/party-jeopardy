import Link from "next/link"
import JeopardyHeader from '../components/JeopardyHeader';

export default function JeopardySelect() {
  return (
    <>
      <JeopardyHeader />
      <main className="flex justify-center min-h-screen p-28">
        <div className='flex flex-row justify-center h-fit mt-36'>
          <div className="mr-2.5 p-2 border border-amber-600">
            <button className='block border border-jeopardyYellow p-4 font-gyparody text-5xl text-jeopardyYellow'>
              <Link href='/party-jeopardy'>
                Party Jeopardy
              </Link>
            </button>
          </div>
          <div className="ml-2.5 p-2 border border-amber-600">
            <button className='block border border-jeopardyYellow p-4 font-gyparody text-5xl text-jeopardyYellow'>
              <Link href='/bible-jeopardy'>
                Bible Jeopardy
              </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
