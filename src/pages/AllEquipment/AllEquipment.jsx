import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEquipment = () => {
    const [equipments, setEquipments] = useState([])
    useEffect(() => {
        fetch('http://localhost:4545/all-equipments')
            .then(res => res.json())
            .then(data => setEquipments(data))
    },[])
    return (
        <div className="">
            <div className="overflow-x-auto minH">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold">
                            <th>
                                Number
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipments.length === 0 ? <span className="loading loading-dots w-48"></span> :
                                equipments.map((equipment, idx) => <tr className="hover:bg-gray-100" key={equipment._id}>
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
                                        <Link to={`/details-page/${equipment?._id}`} className="btn hover:btn-accent btn-xs">details</Link>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;