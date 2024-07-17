import Sidebar from "@/app/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";
import React  from "react";




export default async function Dashboard () {

    const user = await currentUser()
    if (!user) return <h1>User Not logged in!</h1>

    return (
        <div>
            <h1>User logged in!</h1>
            <Sidebar/>
        </div>
    )
}


