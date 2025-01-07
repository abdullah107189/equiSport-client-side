import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaSquarePen } from "react-icons/fa6";

const MyEquipment = () => {
    const [dataLoading, setDataLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`https://equi-sports-server-side-ten.vercel.app/my-equipments`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                setDataLoading(false)
            })
            .catch(() => {
                setDataLoading(false)
            })
    }, [datas])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://equi-sports-server-side-ten.vercel.app/delete-equipment/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div className="mxw overflow-x-auto">
            {
                dataLoading ?
                    <div className="w-full flex items-center justify-center minH">
                        <div className="w-full flex items-center justify-center">
                            <span className="loading loading-dots w-48"></span>
                        </div>
                    </div>
                    :
                    datas.length === 0 ?
                        <div className="w-full flex items-center flex-col gap-5 justify-center py-10 minH">
                            <h1 className="text-3xl font-bold ">You are not add any Equipment</h1>
                            <Link to={'/addEquipment'} className="btn hover:btn-accent ">Add Equipment</Link>
                        </div>
                        :

                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead className="sticky dark:bg-gray-900 dark:text-white bg-gray-100 z-10">
                                    <tr className="font-bold">
                                        <th>
                                            Number
                                        </th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Update</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((equipment, idx) => <tr className="dark:hover:bg-gray-900 hover:bg-gray-100" key={equipment._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-16 w-16">
                                                        <img
                                                            src={equipment?.image}
                                                            alt={equipment?.itemName} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            {equipment?.itemName}
                                        </td>
                                        <td>
                                            {equipment?.category}
                                        </td>
                                        <td>
                                            {equipment?.price}
                                        </td>
                                        <td>
                                            {equipment?.stockStatus}
                                        </td>
                                        <th>
                                            <Link to={`/update-page/${equipment?._id}`} className="btn hover:btn-accent btn-xs"><FaSquarePen />
                                            </Link>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDelete(equipment?._id)} className="btn hover:btn-accent btn-xs"><MdDelete />
                                            </button>
                                        </th>

                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
            }
        </div>
    );
};

export default MyEquipment;