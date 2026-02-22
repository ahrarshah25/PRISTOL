import React, { useEffect } from 'react'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Footer from '../Components/LandingPage/Footer/Footer'
import Banner from '../Components/AboutPage/Banner'
import Heading from '../Components/AboutPage/Heading'
import Description from '../Components/AboutPage/Description'
import Card from '../Components/ContactPage/Card'
import terms from '../data/terms'

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions - PRISTOL";
  });
  return (
    <>
      <Navbar />

    <div className="mt-[87px] min-h-screen bg-white">
      
      <Banner 
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our products and services"
        bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="h-[500px]"
        align="left"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Heading 
              text="Our Commitment to"
              highlight="Transparency"
              center={true}
            />
            <div className="mt-6">
              <Description 
                text="These Terms and Conditions govern your use of PRISTOL products and services. By accessing our website or purchasing our products, you agree to be bound by these terms. We recommend reading them carefully to understand your rights and responsibilities."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((term) => (
              <Card
                key={term.id}
                heading={term.heading}
                description={term.description}
                type="text"
                icon={term.icon}
              />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-50 to-white p-8 rounded-3xl border border-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Heading 
                  text="Need"
                  highlight="Clarification?"
                />
                <div className="mt-4">
                  <Description 
                    text="If you have any questions about our Terms and Conditions, please don't hesitate to reach out to our support team. We're here to help you understand your rights and ensure a smooth experience with PRISTOL."
                  />
                </div>
                <div className="mt-6">
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                    <p className="text-sm text-gray-600 italic">
                      "These terms are fair and transparent. I appreciate how clearly everything is explained."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">JS</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Javeria Saud</p>
                        <p className="text-xs text-gray-500">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
            <p>Last Updated: March 15, 2026</p>
            <p className="mt-2">© 2026 PRISTOL. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>

  )
}

export default Terms