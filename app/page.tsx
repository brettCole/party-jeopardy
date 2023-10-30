import Link from "next/link";
import JeopardyHeader from '@/app/_components/JeopardyHeader';

export default function Page() {
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
                <Link href='/jeopardy'>
                  Party Jeopardy
                </Link>
              </button>
            </div>
          </div>
          <div className="ml-2.5 p-2 border border-amber-600">
            <div
              className="tooltip"
              data-tip="Play 3 rounds including Bible Jeopardy, Double, and Final Bible Jeopardy. Find out who the winner is each game."
            >
              <button className='block border border-jeopardyYellow p-4 font-gyparody text-5xl text-jeopardyYellow'>
                <Link href='/api/auth'>
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
