import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import './updatePage.css'
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Rating from "react-rating";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const UpdatePage = () => {
    const loadData = useLoaderData()
    const {
        _id, image, itemName, category, price, rating, customization, processingTime, stockStatus, description, authorUser
    } = loadData;
    const [ratings, setRatings] = useState(rating)
    const [startDate, setStartDate] = useState(new Date());
    const formattedDate = startDate.toLocaleDateString('CA-en')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            image: e.target.image.value,
            itemName: e.target.itemName.value,
            category: e.target.category.value,
            price: e.target.price.value,
            rating: ratings,
            customization: e.target.customization.value,
            processingTime: formattedDate,
            stockStatus: e.target.stockStatus.value,
            description: e.target.description.value,
        };
        fetch(`https://equi-sports-server-side-ten.vercel.app/update-equipments/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: `Updated ${itemName}`,
                        text: `${authorUser}, please check your update..`,
                        icon: 'success'
                    })
                    navigate(-1)
                }

            })
            .catch(error => {
                Swal.fire({
                    text: error.messages,
                    title: 'error is updatePage.jsx',
                    icon: 'success'
                })
            })
        e.target.reset();
    };
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            defaultValue={image}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="itemName" className="block text-sm font-medium">Item Name</label>
                        <input
                            type="text"
                            id="itemName"
                            name="itemName"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            defaultValue={itemName}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            defaultValue={category}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            defaultValue={price}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-medium">Rating</label>
                        <Rating
                            initialRating={rating}
                            onChange={(rate) => setRatings(rate)}
                            emptySymbol={<FaRegStar className="w-10 h-10" />}
                            fullSymbol={<FaStar className="w-10 h-10" />}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="customization" className="block text-sm font-medium">Customization</label>
                        <input
                            type="text"
                            id="customization"
                            name="customization"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            defaultValue={customization}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="processingTime" className="block text-sm font-medium">Processing Time (days)</label>
                        <div className="flex items-center gap-10 relative">
                            <DatePicker
                                id="processingTime"
                                className="mt-2 w-full p-2 border rounded-md shadow-sm"
                                selected={startDate}
                                defaultValue={processingTime}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM//yyyy"
                            />
                            <p className=""><span className="moving-arrow lg:right-[47%] right-[35%]"><FaArrowLeft /></span>select this field</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="stockStatus" className="block text-sm font-medium">Stock Status</label>
                        <input
                            type="number"
                            id="stockStatus"
                            name="stockStatus"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            defaultValue={stockStatus}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="authorEmail" className="block text-sm font-medium">Author Email</label>
                        <input
                            type="email"
                            id="authorEmail"
                            defaultValue={user?.email}
                            readOnly
                            name="authorEmail"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="authorName" className="block text-sm font-medium">Author Name</label>
                        <input
                            type="text"
                            id="authorName"
                            defaultValue={user?.displayName}
                            readOnly
                            name="authorName"
                            className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-2 block w-full p-2 border rounded-md shadow-sm"
                        defaultValue={description}
                        required
                    ></textarea>
                </div>

                <div className="mb-6">
                    <button
                        type="submit"
                        className="w-full btn py-2 rounded-md hover:btn-accent"
                    >
                        Update Equipment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;