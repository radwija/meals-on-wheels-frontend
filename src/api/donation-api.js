import axios, { BASE_URL } from './axios'

export const saveDonationApi = async (donation) => {
    return await axios.post("api/donation", {
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

/*  
*   Ensuring that backend is running to prevent any donation activity.
*   User balance still can be decreased but the donation information not stored into database 
*   if backend is not running (preventing lost money).
*/
export const isDonationApiAvailable = async () => {
    try {
        const response = await fetch(`${BASE_URL}api/donation`);
        if (response.ok) {
            return {
                isDisabled: false,
                text: "Please enter amount ($ 9,999,999 maximum)"
            };
        } else {
            if (response.status === 404) {
                console.log(response.status)
                return {
                    isDisabled: true,
                    text: "Error: Unable to donate, there is trouble in our system :("
                };
            }
            else if (response.status === 400) {
                console.log(response.status)
                return {
                    isDisabled: true,
                    text: "Error: Unable to donate, there is trouble in our system :("
                };
            }
        }
    } catch (error) {
        console.log(`Error: ${error}`)
        return {
            isDisabled: true,
            text: "Error: Unable to donate, there is trouble in our system :("
        };
    }
};