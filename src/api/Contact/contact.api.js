import axiosInstance from '../axios';

export const sendContactMail = async (fullName, email, subject, message) => {
    return axiosInstance.post(
        'https://pristol-backend.vercel.app/api/contact/contactMail', 
        {
            fullName,
            email,
            subject,
            message,
        }
    )
}