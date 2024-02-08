import { signIn, useSession } from "next-auth/react";
import Image from "next/image";


export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <main className="flex items-center w-screen h-screen bg-blue-900">
          <div className="text-center w-full">
            <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-md">login with google</button>
          </div>
        </main>
      </>
    );
  }

  return (
    <div>logged in {session.user.email}</div>
  )
}
