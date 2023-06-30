import React from 'react'
import Layout from '../components/Layout'

export const LandingPage = () => {
    return (
        <Layout>
            <section className='mt-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
                <div className='lg:px-20 md:px-8 py-5 text-center lg:text-left md:text-left sm:text-center sm:col-span-12 md:col-span-6'>
                    <h1 className='text-4xl md:text-6xl font-semibold mb-6'>Meals on Wheels</h1>
                    <p className='w-full'>
                        Bringing Comfort and Nourishment to Those in Need: Join us in our mission to deliver hot, nutritious meals to individuals facing age, disease, or disability through the Meals On Wheels program.
                    </p>
                </div>
                <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
                    <img src="https://images.pexels.com/photos/6646768/pexels-photo-6646768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="https://images.pexels.com/photos/6646768/pexels-photo-6646768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
            </section>
        </Layout>
    )
}
