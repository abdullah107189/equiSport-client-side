import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import axios from "axios";
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


    const handleSortChange = async (event) => {
        const value = event.target.value;
        const { data } = await axios.get(`https://equi-sports-server-side-ten.vercel.app/all-equipments?sort=${value}`)
        setEquipments(data)
        setDataLoading(false)
    };
    return (
        <div className="mxw min-h-[70vh]">
            <div className="flex items-center gap-5 justify-end p-4">
                <p>sort by price : </p>
                <select
                    defaultValue={'default'}
                    onChange={handleSortChange}
                    className="flex cursor-pointer items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="default">
                        <FaSortAmountUp className="inline mr-2" />
                        Default
                    </option>
                    <option value="asc">
                        <FaSortAmountUp className="inline mr-2" />
                        Ascending
                    </option>
                    <option value="des">
                        <FaSortAmountDown className="inline mr-2" />
                        Descending
                    </option>
                </select>
            </div>
            <div className="pb-10">
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 gap-2 md:grid-cols-3 ">
                    {
                        dataLoading ?
                            <div className="xl:col-span-5 lg:col-span-4 md:col-span-3  grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 ">
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                            </div>
                            :
                            equipments.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div >
    );
};

export default AllEquipment;