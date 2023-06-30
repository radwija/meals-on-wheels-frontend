import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

export const LandingPage = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <Layout>
            <section className='my-20 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
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
            <section className='my-40'>
                <div className='p-10' style={{
                    background: `
                    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                    url(https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                    <h1 className='text-center text-white text-4xl md:text-5xl font-semibold mb-6'>Our Partnerships</h1>
                    <div className='flex mx-auto gap-x-8 justify-center mb-4'>
                        <img className='rounded-full h-20 w-20' src="https://static.vecteezy.com/system/resources/previews/006/735/689/original/vintage-grilled-barbecue-logo-retro-bbq-fire-grill-food-and-restaurant-icon-red-fire-icon-free-vector.jpg" alt="" />
                        <img className='rounded-full h-20 w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuRhTohUgknm04uhPuGboFm9B0CTdYfWrFg&usqp=CAU" alt="" />
                        <img className='rounded-full h-20 w-20' src="https://i.etsystatic.com/9264928/r/il/9fcb2e/1947415219/il_fullxfull.1947415219_f61b.jpg" alt="" />
                        <img className='rounded-full h-20 w-20' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-logo-design-template-a342a3b7515a10c800c6885bce8b3ae9_screen.jpg?ts=1619678752" alt="" />
                    </div>
                </div>
            </section>

            <section>
                <h1 className='text-center text-4xl md:text-5xl font-semibold'>Who We Are </h1>
                <p className='text-center mt-5 mx-10 md:mx-32'>MerryMeal is a compassionate and dedicated charitable organization that focuses on providing nutritious meals to individuals who are unable to cook for themselves or maintain their nutritional status. Our primary goal is to ensure that qualified adults living at home have access to hot noon meals, promoting their well-being and overall health.</p>
                <div className="grid grid-cols-12 gap-10 place-items-center place-content-center px-5  py-10">
                    <motion.div
                        className="xs:col-span-12 xs:my-3 xs:shadow-md xs:rounded-md xs:p-3 md:my-0 md:shadow-none md:rounded-none md:p-0 md:col-span-4 grid place-items-center gap-3 "
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6, stagger: 0.2 }}
                    >
                        <img src="https://images.pexels.com/photos/8060428/pexels-photo-8060428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </motion.div>
                    <motion.div
                        className="xs:col-span-12 xs:my-3 xs:shadow-md xs:rounded-md xs:p-3 md:my-0 md:shadow-none md:rounded-none md:p-0 md:col-span-4 grid place-items-center gap-3 "
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6, stagger: 0.2 }}
                    >
                        <img src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </motion.div>
                    <motion.div
                        className="xs:col-span-12 xs:my-3 xs:shadow-md xs:rounded-md xs:p-3 md:my-0 md:shadow-none md:rounded-none md:p-0 md:col-span-4 grid place-items-center gap-3 "
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6, stagger: 0.2 }}
                    >
                        <img src="https://images.pexels.com/photos/8060427/pexels-photo-8060427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </motion.div>
                </div>
            </section>

            <section className='my-52 sm:flex sm:flex-wrap sm:flex-col md:grid md:grid-cols-12 p-5 '>
                <div className='lg:px-20 md:px-8 py-5 sm:col-span-12 md:col-span-6'>
                    <div className='w-full h-96'
                        style={{
                            background: "url('https://images.pexels.com/photos/6994963/pexels-photo-6994963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                            backgroundSize: "cover",
                            backgroundPosition: "bottom"
                        }}
                    ></div>
                    {/* <img src="https://images.pexels.com/photos/6994963/pexels-photo-6994963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="https://images.pexels.com/photos/6646768/pexels-photo-6646768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}
                </div>
                <div className='lg:px-20 md:px-8 py-5 lg:text-left md:text-left sm:text-left sm:col-span-12 md:col-span-6'>
                    <h1 className='text-4xl md:text-6xl font-semibold mb-6'>Our Commitment</h1>
                    <ul className='list-disc ml-6'>
                        <li className='mb-5'>We hold our volunteers in the highest regard; they are the foundation of our work.</li>
                        <li className='mb-5'>Through partnerships, diversity, and inclusion, we respect our community.</li>
                        <li className='mb-5'>We welcome innovation and organizational change.</li>
                        <li className='mb-5'>Our company practices fiscal, social, and environmental responsibility.</li>
                        <li className='mb-5'>We consistently offer services and programs of the highest caliber.</li>
                    </ul>
                </div>
            </section>

            <section className='mt-20'>
                <div className='p-40' style={{
                    background: `
                    linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                    url(https://images.pexels.com/photos/3865544/pexels-photo-3865544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                    <p className='text-center text-white text-4xl md:text-5xl font-normal'>Keep Up with our Services</p>
                    <p className='text-center text-white text-4xl md:text-5xl font-normal mb-20'>News and Events</p>
                    <div className='mx-auto text-center'>
                        <p className='mb-10 text-white'>Let's join us!</p>
                        <Link to={'registration'} className='text-1xl font-normal text-white bg-accent-dark hover:bg-accent focus:ring-4 focus:ring-blue-300 rounded-lg px-20 py-4 mb-2 focus:outline-none'>Register</Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
