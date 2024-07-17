import React from 'react'



const navItems = [
    {
        item: "Home",
        link: "/"
    },
    
    {
        item: "Outfits",
        link: "/api/auth/outfits"
    },

    {
        item: "Inspo",
        link: "#"
    },

    {
        item: "Closet",
        link: "/api/auth/closet"
    
    }
]


export default function Sidebar() {
    return (
        <div className='h-screen w-64  bg-slate-400'>
            <ul>
                {navItems.map((item) =>
                <li key={item.item} className='py-4 flex p-11 font-bold'>
                    <div>
                        <a  href={item.link} className='text-sm font-normal text-gray-600'>{item.item}</a>
                    </div>
                </li>

                )}
            </ul>

        </div>
    )
}




