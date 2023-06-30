import React from 'react'
import Layout from '../components/Layout'

export const LandingPage = () => {
    return (
        <Layout>
            <section className='h-screen mt-10 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
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
            <section>
                <div className='p-10 h-64' style={{
                    background: `
                    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                    url(https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                    <h1 className='text-center text-white text-4xl md:text-6xl font-semibold mb-6'>Our Partnerships</h1>
                    <div className='flex mx-auto gap-x-8 justify-center mb-4 h-10'>
                        <img className='rounded-full h-20 w-20' src="https://static.vecteezy.com/system/resources/previews/006/735/689/original/vintage-grilled-barbecue-logo-retro-bbq-fire-grill-food-and-restaurant-icon-red-fire-icon-free-vector.jpg" alt="" />
                        <img className='rounded-full h-20 w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuRhTohUgknm04uhPuGboFm9B0CTdYfWrFg&usqp=CAU" alt="" />
                        <img className='rounded-full h-20 w-20' src="https://i.etsystatic.com/9264928/r/il/9fcb2e/1947415219/il_fullxfull.1947415219_f61b.jpg" alt="" />
                        <img className='rounded-full h-20 w-20' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-logo-design-template-a342a3b7515a10c800c6885bce8b3ae9_screen.jpg?ts=1619678752" alt="" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
