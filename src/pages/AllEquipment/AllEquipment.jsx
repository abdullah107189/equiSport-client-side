import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AllEquipment = () => {
    const [equipments, setEquipments] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        fetch('https://equi-sports-server-side-ten.vercel.app/all-equipments')
            .then(res => res.json())
            .then(data => {
                setEquipments(data)
                setDataLoading(false)
            })
            .catch(() => {
                setDataLoading(false)
            })
    }, [])
    const handleSortByPrice = () => {
        fetch('https://equi-sports-server-side-ten.vercel.app/all-equipments/sortByPrice')
            .then(res => res.json())
            .then(data => {
                setEquipments(data)
                setDataLoading(false)
            })
            .catch(() => {
                setDataLoading(false)
            })
    }
    return (
        <div>
            <Slide direction="left" triggerOnce cascade="false">
                <button onClick={handleSortByPrice} className={`${equipments.length === 0 ? 'hidden' : 'flex'} btn hover:btn-accent mb-2`}>Sort By Price</button>
            </Slide>

            <div className=" md:overflow-auto overflow-x-scroll">
                {
                    dataLoading ?
                        <div className="w-full flex items-center justify-center minH">
                            <div className="w-full flex items-center justify-center">
                                <span className="loading loading-dots w-48"></span>
                            </div>
                        </div>
                        :
                        equipments.length === 0 ?
                            <div className="w-full flex items-center flex-col gap-5 justify-center py-10 minH">
                                <h1 className="text-3xl font-bold ">You are not add any Equipment</h1>
                                <Link to={'/addEquipment'} className="btn hover:btn-accent ">Add Equipment</Link>
                            </div>
                            :
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
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {equipments.map((equipment, idx) => <tr className="dark:hover:bg-gray-900 hover:bg-gray-100" key={equipment._id}>
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

                                    </tr>)}
                                </tbody>
                            </table>
                }
            </div>
        </div >
    );
};

export default AllEquipment;