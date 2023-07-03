import React, { useState } from "react";
import donation_bg from "../assets/images/donation_bg.jpg"
import { PayPalButtons } from "@paypal/react-paypal-js";
import CurrencyInput from 'react-currency-input-field';
import { saveDonationApi, isDonationApiAvailable } from "../api/donation-api";
import Layout from "../components/Layout";


export const DonationPage = () => {
    const saveDonation = (donation) => {
        saveDonationApi(donation)

        setAmountSource("")
    }


    const onlyNumberRegex = /[^0-9]+/;
    const [amountSource, setAmountSource] = useState("");
    const [isTypingAmount, setTypingAmount] = useState("0");
    const amountValidation = () => {
        if (amountSource === undefined ||
            amountSource?.replace(onlyNumberRegex, "").length === 0 ||
            amountSource === "" ||
            amountSource === "0" ||
            parseFloat(amountSource) < parseFloat("0.01") ||
            parseFloat(amountSource) > parseFloat("9999999.99")
        ) {
            return true
        }

        return false
    }

    const [donationText, setDonationText] = useState("");
    const [isDisabled, setDisabled] = useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            const donationApiAvailable = await isDonationApiAvailable();
            setDonationText(donationApiAvailable.text);
            setDisabled(donationApiAvailable.isDisabled);
        };
        fetchData();

        const timeOutId = setTimeout(() => setTypingAmount(false), 500);
        return () => clearTimeout(timeOutId);
    }, [isTypingAmount]);

    return (
        <Layout>
            <div className='bg-primary min-h-screen'>
                <div className='grid place-items-center py-20'>
                    <h1 className='text-4xl md:text-6xl font-bold text-center mb-6'>Donation</h1>
                    <div
                        className={
                            `grid grid-cols-3 xs:p-5 sm:p-5 md:p-10 lg:p-10 max-w-6xl bg-white shadow-xl xs:mx-3 sm:mx-3 md:mx-10 lg:mx-10 rounded-md text-white drop-shadow`
                        }
                        style={{
                            borderRadius: "10px",
                            background: `url(${donation_bg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className='col-start-1 xs:col-span-3 sm:col-span-3 md:col-span-2 text-left max-w-3xl'>
                            <h1 className='text-2xl font-bold pb-3'>Give Comfort and Support</h1>
                            <p>
                                Your kindness brings comfort and support to those in need. By donating, you ensure timely and nutritious meal delivery to individuals facing age, disease, or disability. Your generosity makes a difference.
                            </p>
                            <div className='mt-7 p-4 bg-slate-900 max-w-xl'
                                style={{
                                    borderRadius: "10px"
                                }}>
                                <p className="mb-2">{donationText}</p>
                                <div className="flex items-center mb-2">
                                    <div className="text-3xl font-medium mr-2 text-yellow-400 ">$</div>
                                    <CurrencyInput
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="amount"
                                        disabled={isDisabled}
                                        allowNegativeValue={false}
                                        placeholder="0.00"
                                        decimalsLimit={2}
                                        onValueChange={(value) => {
                                            setAmountSource(value);
                                            setTypingAmount(true);
                                        }}
                                        value={amountSource}
                                    />
                                </div>
                                <div className="text-red-500" hidden={!(parseFloat(amountSource) > parseFloat("9999999.99"))}>Input is out of maximum</div>

                                {!isTypingAmount && <PayPalButtons className="mt-5"
                                    style={{
                                        layout: "horizontal",
                                        tagline: false,
                                    }}
                                    disabled={amountValidation()}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        currency_code: "USD",
                                                        value: amountSource,
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
                                            const rawDonation = {
                                                payerName: `${details.payer.name.given_name} ${details.payer.name.surname}`,
                                                email: details.payer.email_address,
                                                amount: parseFloat(amountSource),
                                                paymentSource: data.paymentSource,
                                                transactionDate: details.create_time
                                            }

                                            saveDonation(rawDonation)
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
        </Layout>
    )
}
