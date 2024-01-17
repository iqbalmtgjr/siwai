"use client"
import { useState, SyntheticEvent } from "react"
// import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

type Pegawai = {
    id: number;
    nik: string;
    nama: string;
    email: string;
    jeniskelamin: string;
    agama: string;
    alamat: string;
};

const updatePegawai = ({pegawai}: {pegawai: Pegawai}) => {
    const [nik, setNik] = useState(pegawai.nik)
    const [nama, setNama] = useState(pegawai.nama)
    const [email, setEmail] = useState(pegawai.email)
    const [jeniskelamin, setJeniskelamin] = useState(pegawai.jeniskelamin)
    const [agama, setAgama] = useState(pegawai.agama)
    const [alamat, setAlamat] = useState(pegawai.alamat)

    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();
    
    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.patch(`/api/pegawai/${pegawai.id}`, {
            nik: nik,
            nama: nama,
            email: email,
            jeniskelamin: jeniskelamin,
            agama: agama,
            alamat: alamat,
        });
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
        <button className="btn btn-info btn-sm" onClick={handleModal}>Edit</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Tambah Pegawai Baru</h3>
                <form onSubmit={handleUpdate}>
                    <div className="form-control w-full">
                        <label className="label font-bold">NIK</label>
                        <input type="number" value={nik} onChange={(e) => setNik(e.target.value)} className="input input-bordered" placeholder="NIK" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Nama Lengkap</label>
                        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="input input-bordered" placeholder="Nama Lengkap" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" placeholder="Email" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Jenis Kelamin</label>
                        <select value={jeniskelamin} onChange={(e) => setJeniskelamin(e.target.value)} className="input input-bordered">
                            <option value="" disabled>--Pilih Jenis Kelamin--</option>
                            <option value="laki-laki">Laki-laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Agama</label>
                        <select value={agama} onChange={(e) => setAgama(e.target.value)} className="input input-bordered">
                            <option value="" disabled>--Pilih Agama--</option>
                            <option value="islam">Islam</option>
                            <option value="kristen">Kristen</option>
                            <option value="khatolik">Khatolik</option>
                            <option value="hindu">Hindu</option>
                            <option value="budha">Budha</option>
                            <option value="khonghucu">Khonghucu</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Alamat</label>
                        <textarea
                            onChange={(e) => setAlamat(e.target.value)}
                            className="input input-bordered h-20"
                            placeholder="Alamat Lengkap"
                            value={alamat}
                        >{alamat}</textarea>
                        {/* <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)}
                            className="input input-bordered h-20"
                            placeholder="Alamat Lengkap" /> */}
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>Close</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default updatePegawai
