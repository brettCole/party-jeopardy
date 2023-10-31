import JeopardyHeader from "@/app/_components/JeopardyHeader";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <JeopardyHeader />
      <div className="h-5/6 mt-14 flex items-center justify-center">
        <div className="p-2 border border-amber-600">
          <form className="flex flex-col justify-center items-center px-8 pt-6 pb-8 border border-jeopardyYellow">
            <div className="mb-4">
              <Link 
                className="michroma-classname text-2xl text-jeopardyYellow" 
                href='auth/signin'
              >
                Sign In
              </Link>
            </div>
            <div className="mb-4">
              <Link 
                className="michroma-classname text-2xl text-jeopardyYellow hover:text-jeopardyYellow" 
                href='auth/register'
              >
                New User
              </Link>
            </div>
            <div className="divider">OR</div>
            {/* TODO Figure out how to wire Guest */}
            <p className="michroma-classname text-2xl text-jeopardyYellow">Play as Guest</p>
          </form>
        </div>
      </div>
    </>
  )
}