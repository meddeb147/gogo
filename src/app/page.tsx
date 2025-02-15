'use client'

import Image from 'next/image'
import QRCodeSection from '@/components/QRCodeSection'
import { useState } from 'react'

export default function Home() {
  const apkDownloadUrl = 'https://drive.google.com/uc?export=download&id=1s1VOl5gANwu_tRKd73QNKkEDqL1xe6-u'
  const [activeDownload, setActiveDownload] = useState<'apk' | 'qr' | null>(null)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="IntakeAi Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <h1 className="text-white text-2xl font-bold">IntakeAi</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.jpg"
              alt="IntakeAi Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
            Track Your Nutrition with AI
          </h2>
          <p className="text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            Simply scan your meals and get instant, accurate nutritional information powered by advanced AI technology.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mb-12 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Startup Act Submission Notice</h3>
            <p className="text-gray-600">
              This application is currently under review for the Startup Act program. While we prepare for our official Play Store release, 
              you can download our APK directly from this website to try out the full features of IntakeAi.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={apkDownloadUrl}
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
            <button
              onClick={() => setActiveDownload(activeDownload === 'qr' ? null : 'qr')}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              Show QR Code
            </button>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8">See IntakeAi in Action</h2>
          <p className="text-xl text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Watch how easy it is to track your nutrition with IntakeAi
          </p>
          <div className="bg-white p-4 rounded-xl mb-12 max-w-2xl mx-auto">
            <p className="text-gray-600 text-center">
              As part of our Startup Act submission, we're excited to share this preview of our application. 
              Download the APK to experience the full version of IntakeAi before its official release.
            </p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/nwvmm9xvDKw"
              title="IntakeAi App Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      {activeDownload === 'qr' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full mx-4">
            <QRCodeSection apkDownloadUrl={apkDownloadUrl} />
            <button
              onClick={() => setActiveDownload(null)}
              className="mt-6 px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image
              src="/logo.jpg"
              alt="IntakeAi Logo"
              width={30}
              height={30}
              className="rounded-full"
              priority
            />
            <span className="text-xl font-bold">IntakeAi</span>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} IntakeAi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
