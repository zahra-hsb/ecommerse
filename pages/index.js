import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";


export default function Home() {
  // const { data: session } = useSession();
  // if (!session) {
    return (
      <>

        <main className="flex items-center w-screen h-screen">
         <Sidebar />
        </main>
      </>
    );
  // }

  // return (
  //   <div>logged in {session.user.email}</div>
  // )
}
