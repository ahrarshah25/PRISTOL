import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import showLoading from "../Alerts/loading"
import fireAlert from "../Alerts/alert"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../Firebase/config"

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      showLoading("Sending your message...");
    await addDoc(collection(db, "contactMessages"), formData);
      fireAlert("success", "Message sent successfully!")
    } catch (error) {
      console.log(error)
      fireAlert("error", "Error sending message")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <div className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        
        <Input
          type="textarea"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        
        <Button type="submit" text="Send Message" />
      </div>
    </form>
  )
}

export default Form