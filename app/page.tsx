import Link from "next/link"
import JeopardyHeader from '../components/JeopardyHeader';

export const dynamic = 'force-dynamic'

export default function JeopardySelect() {
  return (
    <>
      <JeopardyHeader />
      <main className="flex justify-center min-h-screen p-28">
        <div className='flex flex-row justify-center h-fit mt-36'>
          <div className="mr-2.5 p-2 border border-amber-600">
            <div 
              className="tooltip" 
              data-tip="Play 3 rounds including Jeopardy, Double, and Final Jeopardy. All while keeping score. Play with your friends and keep track of who is the smartest."
            >
              <button className='block border border-jeopardyYellow p-4 font-gyparody text-5xl text-jeopardyYellow'>
                <Link href='/party-jeopardy'>
                  Party Jeopardy
                </Link>
              </button>
            </div>
          </div>
          <div className="ml-2.5 p-2 border border-amber-600">
            <div 
              className="tooltip"
              data-tip="Play 3 rounds of Bible based Jeopardy questions. Find out who the winner is each game, but will not track number of wins."
            >
              <button className='block border border-jeopardyYellow p-4 font-gyparody text-5xl text-jeopardyYellow'>
                <Link href='/bible-jeopardy'>
                  Bible Jeopardy
                </Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
