import axiosInstance from "../axios";

export const sendCheckoutMail = async (orderData) => {
    return axiosInstance.post(
        'https://pristol-backend.vercel.app/api/checkout/checkoutMail',
        {
            orderData,
        }
    )
}