import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Rating } from '@smastrom/react-rating'
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, itemName, image, category, price, rating, description } = product

    const [shortDescription, setShortDescription] = useState('')
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (description.length >= 30) {
            // eslint-disable-next-line react/prop-types
            const shortDes = description.slice(0, 30)
            setShortDescription(shortDes)
        } else {
            setShortDescription(description)
        }
    }, [])
    return (
        <Fade cascade direction="top">
            <Link to={`/details-page/${_id}`} className="card bg-base-100 dark:bg-gray-200/10 relative shadow-xl flex h-full group hover:scale-[1.02] transform duration-200 ">
                <figure>
                    <img
                        className="w-full md:h-[150px] h-[250px] object-cover"
                        src={image}
                        alt={itemName} />
                </figure>
                <div className="card-body p-3 flex-grow">
                    <h2 className="card-title">
                        {itemName}
                    </h2>
                    <div className="font-bold text-xl absolute top-2 right-2 text-gray-50 group-hover:bg-gray-700/50 bg-gray-700 rounded-full px-2">{price} $</div>
                    <div className="flex-grow">
                        {/* eslint-disable-next-line react/prop-types */}
                        {shortDescription}..{description.length > 30 ? <Link to={`/product-details/${_id}`} className="text-blue-500">Read More</Link> : ''}
                    </div>

                    <div className="card-actions justify-between mt-2 md:mt-0 flex items-center">
                        <div className="">
                            <Rating readOnly style={{ maxWidth: 120 }} value={rating} />
                        </div>
                        <div className="badge badge-outline ">{category}</div>
                    </div>
                </div>
            </Link>
        </Fade>
    );
};

export default Product;