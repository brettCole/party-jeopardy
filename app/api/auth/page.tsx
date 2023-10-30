import JeopardyHeader from "@/app/_components/JeopardyHeader";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <JeopardyHeader />
      <div>
        <Link href='/auth/signin'>Sign In</Link>
        <Link href='/auth/new-user'>New User</Link>
        <hr />
        {/* TODO Figure out how to wire Guest */}
        <p>Play as Guest</p>
      </div>
    </>
  )
}