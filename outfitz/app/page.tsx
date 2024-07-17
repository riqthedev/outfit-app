import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { currentUser } from "@clerk/nextjs/server";

export default async  function Home() {

  const user = await currentUser()

  if (!user) return <h1>Not Signed in!</h1>
  return (
      <div>
        {/* <Navbar/> */}
  
      </div>
      );
}
