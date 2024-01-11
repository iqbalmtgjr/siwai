import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"

export const metadata = {
    title: 'Kelola Pegawai',
}

const ProductLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar/>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col py-5 px-5">
            <div>{children}</div>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><a>Dashboard</a></li>
            <li><a className="active">Kelola Pegawai</a></li>
            </ul>
        </div>
      </div>
    <Footer/>
        
    </div>
  )
}

export default ProductLayout