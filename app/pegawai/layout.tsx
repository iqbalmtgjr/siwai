import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar";
import { SessionProvider } from 'next-auth/react';
// import '@/app/globals.css';
// import { useSession } from 'next-auth/react';

export const metadata = {
  title: 'Kelola Pegawai',
}

const PageLayout = ({children}: {children: React.ReactNode}) => {
  return (
    // <SessionProvider session={pageProps.session}>
      <div>
        <Navbar/>
        <Sidebar children={children}/>  
        <Footer/>
      </div>
    /* </SessionProvider> */
  )
}

export default PageLayout