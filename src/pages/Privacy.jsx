import React, { useEffect } from 'react'
import Navbar from '../Components/LandingPage/Navbar/Navbar'
import Footer from '../Components/LandingPage/Footer/Footer'
import Banner from '../Components/AboutPage/Banner'
import Heading from '../Components/AboutPage/Heading'
import Description from '../Components/AboutPage/Description'
import Card from '../Components/ContactPage/Card'
import privacy from '../data/privacy'
import { Shield, UserCheck, Clock, Mail } from "lucide-react"

const Privacy = () => {
    useEffect(() =>  {
        document.title = "Privacy Policy - PRISTOL";
    });
  return (
    <>
      <Navbar />

    <div className="mt-[87px] min-h-screen bg-white">
      
      <Banner 
        title="Privacy Policy"
        subtitle="We value your privacy and are committed to protecting your personal information"
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="h-[500px]"
        align="left"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Heading 
              text="Your Privacy Matters"
              highlight="to Us"
              center={true}
            />
            <div className="mt-6">
              <Description 
                text="At PRISTOL, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our website, products, and services. By using PRISTOL, you consent to the practices described in this policy."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacy.map((item) => (
              <Card
                key={item.id}
                heading={item.heading}
                description={item.description}
                type="text"
                icon={item.icon}
              />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-white p-8 rounded-3xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Heading 
                  text="GDPR & CCPA"
                  highlight="Compliance"
                />
                <div className="mt-4">
                  <Description 
                    text="We comply with the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). If you are a resident of the European Economic Area (EEA) or California, you have additional rights regarding your personal data."
                  />
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Exercise Your Rights
                  </a>
                  <a 
                    href="/terms"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-blue-500"
                  >
                    View Terms
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Data Protection</p>
                        <p className="text-xs text-gray-500">GDPR & CCPA Compliant</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      We use industry-standard encryption to protect your data during transmission and storage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Data Retention</h3>
              <p className="text-sm text-gray-600">We retain your data only as long as necessary</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Your Control</h3>
              <p className="text-sm text-gray-600">Access, update, or delete your data anytime</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Contact DPO</h3>
              <p className="text-sm text-gray-600">privacy@pristol.com</p>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
            <p>Effective Date: January 1, 2026</p>
            <p className="mt-2">© 2026 PRISTOL. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Privacy