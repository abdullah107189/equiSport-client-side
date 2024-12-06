import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, itemName, image, category, price, rating, processingTime, stockStatus, description } = product

    const [shortDescription, setShortDescription] = useState('')
    useEffect(() => {

        if (description.length >= 30) {
            const shortDes = description.slice(0, 30)
            setShortDescription(shortDes)
        } else {
            setShortDescription(description)
        }
    }, [])
    //     const onClick = useNavigate()
    // const location = useLocation()
    // const handleDetils = (id) => {
    //     onclick()
    // }
    return (
        <div>
            <div className="card bg-base-100  shadow-xl flex h-full">
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
                    <div className="badge badge-accent">Price : {price} $</div>
                    <div className="flex-grow">
                        {shortDescription}..{description.length > 30 ? <Link to={`/product-details/${_id}`} className="text-blue-500">Read More</Link> : ''}
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/product-details/${_id}`} className="badge bg-slate-200 hover:bg-accent">View Details</Link>
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStar></FaStar></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;