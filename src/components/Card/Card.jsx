import React from "react";

const Card = ({ data }) => {
    const {
        image, itemName, category, price, rating, customization, processingTime, stockStatus, description, authorUser
    } = data;

    return (
        <div className=" bg-white border rounded-lg  flex flex-col h-full">
            {/* Image Section */}
            <img
                src={image}
                alt={itemName}
                className="w-full rounded-t-lg xl:h-[200px] h-[250px] object-cover"
            />

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h2 className="text-xl font-semibold">{itemName}</h2>
                    <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
                    <p className="text-gray-600 mt-2 text-sm">{description}</p>

                    {/* Price and Rating */}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">${price}</span>
                        <span className="text-sm bg-yellow-200 text-yellow-800 py-1 px-2 rounded">
                            {rating} ★
                        </span>
                    </div>

                    {/* Stock Status */}
                    <p
                        className={`mt-2 text-sm font-medium ${stockStatus > 0 ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {stockStatus > 0
                            ? `${stockStatus} in stock`
                            : "Out of Stock"}
                    </p>
                </div>
                {/* Action Button */}
                <div className="flex items-center gap-2 flex-grow justify-center mt-3">
                    <button className="w-1/2 btn hover:btn-accent">
                        Update
                    </button>
                    <button className="w-1/2 btn hover:btn-accent">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
