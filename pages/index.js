import { signIn, useSession } from "next-auth/react";
import Image from "next/image";


export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <main className="flex items-center w-screen h-screen bg-blue-900">
         
        </main>
      </>
    );
  }

  return (
    <div>logged in {session.user.email}</div>
  )
}
