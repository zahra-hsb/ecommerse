import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import Sidebar from "./components/Sidebar";


export default function Layout({ children }) {
  // const { data: session } = useSession();
  // if (!session) {
    return (
      <>

        <main className="flex flex-col sm:flex-row items-center w-screen h-screen">
         <Sidebar />
         {children}

        </main>
      </>
    );
  // }

  // return (
  //   <div>logged in {session.user.email}</div>
  // )
}
