'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
const QRCode = dynamic(() => import('qrcode.react'), { ssr: false })

interface QRCodeSectionProps {
  apkDownloadUrl: string;
}

export default function QRCodeSection({ apkDownloadUrl }: QRCodeSectionProps) {
  return (
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <Image
          src="/logo.jpg"
          alt="IntakeAi Logo"
          width={80}
          height={80}
          className="rounded-xl"
          priority
        />
      </div>
      <h4 className="text-2xl font-bold mb-6">Scan to Download</h4>
      <p className="text-gray-600 mb-8">Use your phone's camera to scan and download the app</p>
      <div className="bg-gray-50 p-6 inline-block rounded-xl shadow-lg">
        <QRCode 
          value={apkDownloadUrl} 
          size={200}
          level="H"
          includeMargin={true}
        />
      </div>
    </div>
  )
}
