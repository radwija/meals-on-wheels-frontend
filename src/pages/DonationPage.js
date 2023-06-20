import React from 'react'
import donation_bg from "../assets/images/donation_bg.jpg"
export const DonationPage = () => {
    return (
        <div className='bg-primary min-h-screen'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold mb-10'>Donation</h1>
                <div
                    className=" w-4/5 p-7 mx-auto color text-white drop-shadow relative"
                    style={{
                        borderRadius: "10px",
                        background: `url(${donation_bg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                >
                    <div className='text-left w-3/5'>
                        <h1 className='text-xl font-bold pb-3'>Give Comfort and Support</h1>
                        <p>
                            Your kindness brings comfort and support to those in need. By donating, you ensure timely and nutritious meal delivery to individuals facing age, disease, or disability. Your generosity makes a difference.
                        </p>
                        <div className='mt-7'>
                            <button className='bg-accent-dark text-white py-2 px-7 rounded-lg drop-shadow hover:bg-accent transition-colors duration-200'>Donate now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
