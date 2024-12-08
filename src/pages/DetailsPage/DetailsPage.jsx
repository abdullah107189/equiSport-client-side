import { useLoaderData, useNavigate } from "react-router-dom";

const DetailsPage = () => {
    const equipmentInfo = useLoaderData()
    const {
        image, itemName, category, price, rating, customization, processingTime, stockStatus, description, authorUser
    } = equipmentInfo;
    const navigate = useNavigate()
    return (
        <div className=" py-10 flex items-center justify-center relative">
            <button onClick={() => navigate(-1)} className="absolute top-0 left-0 btn">Back</button>
            <div className=" mx-auto p-6  shadow-lg rounded-sm border mt-5">
                <div className="flex flex-col md:flex-row md:gap-10">
                    {/* Equipment Image */}
                    <div className="md:w-1/2 flex items-center">
                        <img
                            src={image}
                            alt={itemName}
                            className="lg:w-[800px] md:w-[500px] md:m-0 mb-3 w-full h-auto object-contain rounded-md shadow-md"
                        />
                    </div>

                    {/* Equipment Info */}
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-semibold">{itemName}</h1>
                        <p className="text-sm text-gray-500 mt-2">Category: {category}</p>
                        <p className="text-gray-600 mt-4">{description}</p>

                        <div className="mt-4">
                            <p className="text-sm font-medium">
                                Price: <span className="text-lg font-bold text-green-600">${price}</span>
                            </p>
                            <p className="text-sm font-medium mt-2">
                                Rating: <span className="font-bold">{rating} / 5</span>
                            </p>
                            <p className="text-sm font-medium mt-2">
                                Customization: <span className="text-gray-700">{customization}</span>
                            </p>
                            <p className="text-sm font-medium mt-2">
                                Processing Time: <span className="text-gray-700">{processingTime}</span>
                            </p>
                            <p className="text-sm font-medium mt-2">
                                Stock: <span className={`font-bold ${stockStatus > 0 ? "text-green-500" : "text-red-500"}`}>
                                    {stockStatus > 0 ? `${stockStatus} Available` : "Out of Stock"}
                                </span>
                            </p>
                        </div>

                        {/* Authenticated Email */}
                        <p className="mt-6 text-sm text-gray-500">Added by: {authorUser}</p>
                        {/* Action Buttons */}
                        <div className="mt-6 flex space-x-4">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Buy Now
                            </button>
                            <button className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;