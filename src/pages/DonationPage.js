import React, { useState } from "react";
import donation_bg from "../assets/images/donation_bg.jpg"
import { PayPalButtons } from "@paypal/react-paypal-js";
import CurrencyInput from 'react-currency-input-field';

export const DonationPage = () => {
    const [amount, setAmount] = useState("0");
    const [isTypingAmount, setTypingAmount] = useState("0");

    React.useEffect(() => {
        const timeOutId = setTimeout(() => setTypingAmount(false), 500);
        return () => clearTimeout(timeOutId);
    }, [isTypingAmount]);

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
                            <p>Please enter amount ($ 9,999,999.99 maximum)</p>
                            <CurrencyInput
                                className="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="amount"
                                prefix="$ "
                                allowNegativeValue={false}
                                placeholder="$ 0.00"
                                decimalsLimit={2}
                                onChange={(e) => {
                                    setAmount(`${e.target.value.replace(/\$|,|\s/g, "")}`)
                                    setTypingAmount(true)
                                }}
                            />

                            {!isTypingAmount && <PayPalButtons
                                style={{
                                    layout: "horizontal",
                                    tagline: false,
                                }}
                                disabled={amount === "" || amount === "0" || parseFloat(amount) < parseFloat("0.01") || parseFloat(amount) > parseFloat("9999999.99")}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    currency_code: "USD",
                                                    value: amount,
                                                },
                                            },
                                        ],
                                    })
                                        .then((orderId) => {
                                            // Your code here after create the order
                                            return orderId;
                                        });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then(function (details) {
                                        alert(`name: ${details.payer.name.given_name} ${details.payer.name.surname}`)
                                        console.log(`${details.payer.name.given_name} ${details.payer.name.surname}`) // Payer name
                                        console.log(details.payer.email_address) // email
                                        console.log(data.paymentSource) // source
                                        console.log(`payer id: ${details.payer.payer_id}`)
                                        console.log(amount) // amount
                                        console.log(`create time: ${details.create_time}`) // date
                                        console.log(`expiration time: ${details.expiration_time}`)
                                        console.log(`status: ${details.status}`)

                                    })
                                }}
                                onCancel={(data) => {
                                    console.log(data)
                                }}
                                onError={(data) => {
                                    console.log(data)
                                }}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
