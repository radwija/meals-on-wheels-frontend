import { error } from 'jquery'
import axios, { BASE_URL } from './axios'

export const saveDonationApi = async (donation) => {
    return await axios.post("api/donation/save-donation", {
        payerName: donation.payerName,
        email: donation.email,
        amount: donation.amount,
        paymentSource: donation.paymentSource,
        transactionDate: donation.transactionDate,

    }).then(response => {
        if (!response.ok) {
            if (response.status === 500) {
                alert("Donation failed! There something wrong in our system")
            } else if (response.status === 400) {
                alert("Bad request | Code error: 400")
            }
        }
        alert("Thank you! Donation done successfully!")
    })
        .catch(error => {
            alert("Donation failed! There something wrong in our system")
        })
}

// Checking API active and preventing donators/supporters balance decreased
// export const isDonationApiAvailable = async () => {
//     axios.get("api/donation")
//         .then(res => {
//             if (!res.ok) {
//                 return {
//                     isDisabled: true,
//                     text: "Unable to donate, there is trouble in our system :("
//                 }
//             }
//             return {
//                 isDisabled: false,
//                 text: "Please enter amount ($ 9,999,999 maximum)"
//             }
//         })
//         .catch(error => {
//             return {
//                 isDisabled: true,
//                 text: "Unable to donate, there is trouble in our system :("
//             }
//         })
// }

export const isDonationApiAvailable = async () => {
    try {
        const response = await fetch(`${BASE_URL}api/donation}`);
        if (response.ok) {
            return {
                isDisabled: false,
                text: "Please enter amount ($ 9,999,999 maximum)"
            };
        } else {
            if (response.status === 404)
                return {
                    isDisabled: true,
                    text: "Unable to donate, there is trouble in our system :("
                };
        }
    } catch (error) {
        return {
            isDisabled: true,
            text: "Unable to donate, there is trouble in our system :("
        };
    }
};
