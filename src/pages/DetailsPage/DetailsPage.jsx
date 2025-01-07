import { Rating } from '@smastrom/react-rating'
import { FaCalendar, FaUser } from 'react-icons/fa';
import { useLoaderData, useNavigate } from "react-router-dom";

const DetailsPage = () => {
    const equipmentInfo = useLoaderData()
    const {
        image, itemName, category, price, rating, customization, processingTime, stockStatus, description, authorUser
    } = equipmentInfo;
    const navigate = useNavigate()
    return (
        <div className="mxw md:py-16 pb-10 flex items-center relative  md:hFull">
            <button onClick={() => navigate(-1)} className="absolute top-1 md:flex hidden left-4 actionBtn">Back</button>
            <button onClick={() => navigate(-1)} className="absolute top-1 md:hidden flex right-4 actionBtn">Back</button>
            <div className="md:p-6 p-3 w-full shadow-lg border dark:border-gray-700 dark:shadow-white/20 rounded-2xl md:m-0 mt-5">
                <div className="flex flex-col-reverse md:flex-row  md:gap-10">
                    {/* Equipment Image */}
                    <div className="md:w-1/2 flex items-center">
                        <img
                            src={image}
                            alt={itemName}
                            className="lg:w-[800px] md:w-[500px]  w-full h-auto object-contain rounded-md shadow-md"
                        />
                    </div>

                    {/* Equipment Info */}
                    <div className="md:w-1/2 md:m-0 mb-10">
                        <button className="text-sm badge p-3 text-white bg-[#759f86]">{category}</button>
                        <h1 className="text-5xl font-semibold my-4">{itemName}</h1>

                        <div className="mt-4">
                            <div className='flex items-center md:gap-5 flex-wrap gap-3'>
                                <p className="text-sm font-medium  flex items-center justify-between md:gap-2 gap-1 ">
                                    <Rating readOnly style={{ maxWidth: 100 }} value={rating} /> <span>( {rating} )</span>
                                </p>
                                <p className="text-sm font-medium flex items-center md:gap-3 gap-1 text-[#759f86]">
                                    <FaCalendar></FaCalendar> <span className="">{processingTime}</span>
                                </p>
                                <p className="text-sm font-medium text-[#00cdb8]">
                                    <span className={`font-bold md:mr-2 mr-1 ${stockStatus > 0 ? "" : "text-red-500"}`}>
                                        {stockStatus > 0 ? `${stockStatus} Available` : "Out of Stock"}
                                    </span>
                                    Sold
                                </p>
                            </div>


                            <p className="text-sm font-medium mt-3">
                                <span className="text-3xl exo-2-font text-green-600">${price}</span>
                            </p>

                            <p className="text-lg text-gray-600 dark:text-gray-50 font-bold mt-2">
                                Customization
                            </p>
                            <p className="mb-2">{customization}</p>
                            <p className="text-lg text-gray-600 dark:text-gray-50 font-bold mt-5">
                                Description
                            </p>
                            <p className="mb-2">{description}</p>


                        </div>

                        {/* Authenticated Email */}
                        <p className="mt-6 text-sm flex items-center gap-2 text-gray-500"><FaUser></FaUser> {authorUser}</p>
                        {/* Action Buttons */}
                        <div className="mt-6 flex space-x-4">
                            <button className="actionBtn px-5">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default DetailsPage;