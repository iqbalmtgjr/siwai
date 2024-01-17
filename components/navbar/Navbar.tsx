import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountNav from '../UserAccountnav';

const Navbar = async () => {
    const session = await getServerSession(authOptions)

  return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">SIWAI {session?.user.nama}</a>
            </div>
            <div className="flex-none gap-2">
            {session ? (
            // Jika sudah login, tampilkan tombol logout
            <UserAccountNav/>
            ) : (
            // Jika belum login, tampilkan tombol login
            <a href='/auth/signin' className="btn">
              Login
            </a>
            // <button className='btn' onClick={handleLogin()}>Login</button>
            // <button className="w-full btn btn-primary mt-5" onClick={() => signIn() } >Halaman Login</button>
            )}
        </div>
      </div>
    </div>
    // </SessionProvider>
  );
};

export default Navbar;