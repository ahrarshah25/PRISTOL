import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import showLoading from "../Alerts/loading";
import fireAlert from "../Alerts/alert";
import { sendContactMail } from '../../api/Contact/contact.api';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../../Firebase/config";
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      showLoading("Sending your message...");
      
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        status: 'unread',
        createdAt: Date.now()
      });

      sendContactMail(formData.name, formData.email, formData.subject, formData.message);
      
      fireAlert("success", "Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.log(error);
      fireAlert("error", "Error sending message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-green-100 relative overflow-hidden group">
     
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-300 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
      
      <div className="relative">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
        <p className="text-sm text-gray-500 mb-6">We'll get back to you within 24 hours</p>
        
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-12"
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-12"
            />
          </div>
          
          <div className="relative">
            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="pl-12"
            />
          </div>
          
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            text={isSubmitting ? "Sending..." : "Send Message"}
            icon={<Send className="w-4 h-4" />}
            disabled={isSubmitting}
            fullWidth
          />
        </div>
      </div>
    </form>
  );
};

export default Form;