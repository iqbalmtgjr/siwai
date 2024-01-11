import { PrismaClient } from "@prisma/client"
import AddPegawai from "./addPegawai";
import DeletePegawai from "./deletePegawai";
import UpdateProduct from "./updateProduct";
const prisma = new PrismaClient();

const getPegawais = async () => {
    const res = await prisma.pegawai.findMany({
        select:{
            id: true,
            nik: true,
            nama: true,
            email: true,
            jeniskelamin: true,
        }
    });
    return res;
}

// const getBrands = async () => {
//     const res = await prisma.brand.findMany();
//     return res
// }

const Pegawai = async () => {
    const [pegawais] = await Promise.all([getPegawais()]);
  return (
    <div>
        <div className="mb-5">
            <AddPegawai />
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>NIK</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Jenis Kelamin</th>
                    <th className="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {pegawais.map((pegawai, index)=>(
                    <tr key={pegawai.id}>
                        <td>{index + 1}</td>
                        <td>{pegawai.nik}</td>
                        <td>{pegawai.nama}</td>
                        <td>{pegawai.email}</td>
                        <td>{pegawai.jeniskelamin}</td>
                        <td className="flex justify-center space-x-1">
                            <UpdateProduct pegawai={pegawai} />
                            <DeletePegawai pegawai={pegawai}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Pegawai