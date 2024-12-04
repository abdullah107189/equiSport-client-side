
import { useState } from "react";
import './addEquipment.css'
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Rating from "react-rating";
const AddEquipment = () => {
    const [rating, setRating] = useState(1)
    const [startDate, setStartDate] = useState(new Date());
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            image: e.target.image.value,
            itemName: e.target.itemName.value,
            category: e.target.category.value,
            price: e.target.price.value,
            rating: rating,
            customization: e.target.customization.value,
            processingTime: startDate,
            stockStatus: e.target.stockStatus.value,
            description: e.target.description.value,
        };
        console.log(formData)
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
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-medium">Rating</label>
                        <Rating
                            initialRating={1}
                            onChange={(rate) => setRating(rate)}
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
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="processingTime" className="block text-sm font-medium">Processing Time (days)</label>
                        <div className="flex items-center gap-10 relative">
                            <DatePicker id="processingTime" className="mt-2 w-full p-2 border rounded-md shadow-sm" selected={startDate} onChange={(date) => setStartDate(date)} />
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
                        required
                    ></textarea>
                </div>

                <div className="mb-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;
