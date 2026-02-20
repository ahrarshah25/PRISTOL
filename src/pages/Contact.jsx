import React, { useEffect } from 'react'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Banner from '../Components/AboutPage/Banner'
import Card from '../Components/ContactPage/Card'
import Form from '../Components/ContactPage/Form'
import Footer from "../Components/LandingPage/Footer/Footer"

const Contact = () => {
  useEffect(() => {
    document.title = "Contact us - PRISTOL"
  }, [])
  const contactInfo = [
    {
      id: 1,
      heading: "Address",
      description: "Karachi, Sindh, Pakistan",
      type: "text",
      icon: "MapPin"
    },
    {
      id: 2,
      heading: "Phone",
      description: "03009246275",
      type: "whatsapp",
      icon: "Phone"
    },
    {
      id: 3,
      heading: "Email",
      description: "PRISTOL.support.pk",
      type: "email",
      icon: "Mail"
    },
    {
      id: 4,
      heading: "Business Hours",
      description: "24/7 - Always Open",
      type: "text",
      icon: "Clock"
    }
  ]

  return (
    <>
      <Navbar />    

    <div className="mt-[87px] min-h-screen bg-white">
      <Banner 
        title="Contact Us"
        subtitle="Get in touch with our team for any questions or support"
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        height="h-[500px]"
        align="left"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card
                    key={info.id}
                    heading={info.heading}
                    description={info.description}
                    type={info.type}
                    icon={info.icon}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Message</h2>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Contact