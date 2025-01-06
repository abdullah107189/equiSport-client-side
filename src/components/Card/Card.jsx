import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { image, itemName, category, price, rating, stockStatus, description, _id } = data;
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
                        // eslint-disable-next-line react/prop-types
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
        <div className=" dark:border-gray-500 border rounded-lg  flex flex-col h-full">
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
                    <p className="text-sm dark:text-gray-300 text-gray-500 mt-1">Category: {category}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{description}</p>

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
                    <Link to={`/update-page/${_id}`} className="w-1/2 btn hover:btn-accent">
                        Update
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="w-1/2 btn hover:btn-accent">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
