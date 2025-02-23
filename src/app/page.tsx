'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function Home() {
  const apkDownloadUrl = 'https://drive.google.com/uc?export=download&id=1ea7CgWEn0_xn1LqQtJTWap8QEMRkawBK'
  const [activeDownload, setActiveDownload] = useState<'apk' | 'qr' | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (activeDownload === 'qr') {
      setModalOpen(true)
    } else {
      setModalOpen(false)
    }
  }, [activeDownload])

  const closeModal = () => {
    setActiveDownload(null)
  }

  return (
    <main className="min-h-screen bg-white relative">
      {/* QR Code Modal */}
      {activeDownload === 'qr' && (
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 flex items-center justify-center p-4 ${
            modalOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={closeModal}
        >
          <div 
            className={`bg-white rounded-2xl p-8 max-w-sm w-full relative transform transition-all duration-300 ${
              modalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="ViteFait Logo"
                  width={60}
                  height={60}
                  className="rounded-xl shadow-md mx-auto"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Download ViteFait</h3>
              <p className="text-gray-600 mb-6">Scan this QR code with your phone's camera</p>
              <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl inline-block mb-6 shadow-lg">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <QRCodeSVG 
                    value={apkDownloadUrl}
                    size={200}
                    level="H"
                    includeMargin={true}
                    className="mx-auto"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Point your camera at the QR code to open the download link
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-blue-600 py-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="ViteFait Logo"
              width={40}
              height={40}
              className="rounded-full shadow-md"
              priority
            />
            <h1 className="text-white text-2xl font-bold tracking-tight">ViteFait</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Ride, Your Way
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience convenient and reliable rides across Tunisia. Download ViteFait now and join thousands of satisfied riders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => {
                setActiveDownload('apk');
                window.open(apkDownloadUrl, '_blank');
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download APK</span>
            </button>
            <button
              onClick={() => setActiveDownload('qr')}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              <span>Scan QR Code</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Get Started with ViteFait
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl mb-8">
            <iframe
              src="https://www.youtube.com/embed/VFEEQ5e1OFw"
              title="How to Install ViteFait APK"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download App</h3>
              <p className="text-gray-600">Get ViteFait on your phone in seconds</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-gray-600">Sign up with your phone number and start riding</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Your Ride</h3>
              <p className="text-gray-600">Enter your destination and get matched with a nearby driver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ViteFait?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Pickup</h3>
              <p className="text-gray-600">Get picked up within minutes of booking your ride</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Rides</h3>
              <p className="text-gray-600">Verified drivers and real-time ride tracking</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-600">Competitive prices with no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <div className="fixed bottom-6 left-6 flex flex-row space-x-3 z-50">
        <a 
          href="https://www.instagram.com/viteuber/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover-float"
        >
          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.32V11.9a6.33 6.33 0 00-1-.05A6.34 6.34 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
          </svg>
        </a>
        <a 
          href="https://www.tiktok.com/@viteuber"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover-float"
        >
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.32V11.9a6.33 6.33 0 00-1-.05A6.34 6.34 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
          </svg>
        </a>
        <a 
          href="https://wa.me/21628195030"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover-float"
        >
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-50 to-white py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p className="text-sm"> 2024 ViteFait. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
