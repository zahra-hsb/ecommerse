import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";



export default function Home() {
  // const { data: session } = useSession();
  // if (!session) {
    return (
      <>


         <Layout>
          <Dashboard />
         </Layout>

      </>
    );
  // }

  // return (
  //   <div>logged in {session.user.email}</div>
  // )
}
