import axios from './axios'

export const saveDonationApi = async (donation) => {
    return await axios.post("api/donation/save-donation", {
        payerName: donation.payerName,
        email: donation.email,
        amount: donation.amount,
        paymentSource: donation.paymentSource,
        transactionDate: donation.transactionDate,

    })
}