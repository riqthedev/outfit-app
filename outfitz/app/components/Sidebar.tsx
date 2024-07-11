import React from 'react'



const navItems = [
    {
        item: "Home"
    },
    
    {
        item: "Outfits"
    },

    {
        item: "Inspo"
    },

    {
        item: "Closet"
    }
]


export default function Sidebar() {
    return (
        <div className='h-screen w-64  bg-slate-400'>
            <ul>
                {navItems.map((item) =>
                <li key={item.item} className='py-4 flex p-11 font-bold'>
                    <div>
                        <a  href="#" className='text-sm font-normal text-gray-600'>{item.item}</a>
                    </div>
                </li>

                )}
            </ul>

        </div>
    )
}




