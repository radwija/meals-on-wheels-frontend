import React from 'react'

import mow_logo from "../assets/mow_logo.png"
export const Footer = () => {
    return (
        <footer className='bg-footer pt-10 pb-10'>
            <div className='container mx-auto grid grid-cols-5 gap-10 '>
                <ul className='flex flex-wrap items-center mt-3 col-span-2 justify-end gap-20'>
                    <li>Donate</li>
                    <li>Partnerships</li>
                    <li>About Us</li>
                </ul>
                <img src={mow_logo} className=' col-span-1 mx-auto' alt="" />
                <ul className='flex flex-wrap items-center mt-3  col-span-2 justify-start gap-20'>
                    <li>Contact Us</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <hr className='mr-20 ml-20 mb-5 h-0.5 bg-black' />
            <div className='flex mx-auto gap-x-4 justify-center mb-4 h-10'>
                <div className='w-10 h-10 bg-accent rounded-full'> </div>
                <div className='w-10 h-10 bg-accent rounded-full'> </div>
                <div className='w-10 h-10 bg-accent rounded-full'> </div>
                <div className='w-10 h-10 bg-accent rounded-full'> </div>
                <div className='w-10 h-10 bg-accent rounded-full'> </div>
            </div>
            <div className='mx-auto'>© 2023 Merry Meals  </div>
        </footer>
    )
}
