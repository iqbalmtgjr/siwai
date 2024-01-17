import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import '/app/globals.css'

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-4xl"><strong>Selamat Datang di Aplikasi Pengelola Pegawai</strong></h2>
      </div>
    </div>
  )
}


export default page;