import React from "react";
import cs from "../assets/images/cs-icon.png";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const ContactUs = () => {
  return (
    <Layout>
      <div className=" bg-primary ">
        <div className="h-96  gradeint-bg  flex justify-center items-center">
          <motion.div className="text-center text-white">
            <motion.h1
              className="text-6xl font-bold mb-4"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-3xl font-medium max-w-xl"
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Get in contact with us and let us know how we can assist you.
            </motion.p>
          </motion.div>
        </div>
        <div className="grid grid-cols-12 place-items-center place-content-center px-5  py-10">
          <motion.div
            className="xs:col-span-12 xs:my-3 xs:shadow-md xs:rounded-md xs:p-3 md:my-0 md:shadow-none md:rounded-none md:p-0 md:col-span-4 grid place-items-center gap-3 "
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, stagger: 0.2 }}
          >
            <div
              className="bg-secondary rounded-full grid place-items-center"
              style={{ width: "100px", height: "100px" }}
            >
              <img
                src={cs}
                alt="icon"
                className="object-cover"
                style={{ width: "90px", height: "90px" }}
              />
            </div>
            <h2 className="font-bold text-3xl border-b-2 border-black/30 pb-3">
              Customer Support
            </h2>
            <p className="font-medium text-lg text-center px-3">
              Our dedicated customer support team is available 24/7 to assist
              you. Call our customer support hotline at +62 868-162-862 for
              immediate assistance.
            </p>
          </motion.div>
          <motion.div
            className="xs:col-span-12 xs:my-3 xs:shadow-md xs:rounded-md xs:p-3 md:my-0 md:shadow-none md:p-0 md:col-span-4 grid place-items-center gap-3"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, stagger: 0.2 }}
          >
            <div
              className="bg-secondary rounded-full grid place-items-center"
              style={{ width: "100px", height: "100px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="#f7f4ef"
                class="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>
            </div>
            <h2 className="font-bold text-3xl border-b-2 border-black/30 pb-3">
              Connect With Us
            </h2>
            <p className="font-medium text-lg text-center px-3">
              Want to get in touch with us? We're here to help!, Have a
              question, suggestion, or just want to say hello? Send us an email
              at mealsonwheels@gmail.com
            </p>
          </motion.div>
          <motion.div
            className="xs:col-span-12 xs:my-3 xs:shadow-md xs:rounded-md xs:p-3 md:my-0 md:shadow-none md:p-0 md:col-span-4 grid place-items-center gap-3"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, stagger: 0.2 }}
          >
            <div
              className="bg-secondary rounded-full grid place-items-center"
              style={{ width: "100px", height: "100px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="#f7f4ef"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <h2 className="font-bold text-3xl border-b-2 border-black/30 pb-3">
              Customer Support
            </h2>
            <p className="font-medium text-lg text-center px-3">
              Looking to visit us in person? We'd love to see you at our office
              located at Jl. Raya Puputan No.86, Dangin Puri Klod, Kota
              Denpasar, Bali.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
