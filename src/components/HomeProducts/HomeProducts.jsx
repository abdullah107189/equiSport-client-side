import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const HomeProducts = () => {
    const [products, setProducts] = useState([])
    const [dataLoadint, setDataLoading] = useState(true);
    useEffect(() => {
        fetch('https://equi-sports-server-side-ten.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDataLoading(false)
            })
            .catch((error) => {
                Swal.fire({
                    text: error.message,
                    icon: 'error'
                })
                setDataLoading(false)
            })
    }, [])
    return (
        <div className="py-20" id="products">
            <h1 className="md:text-5xl text-2xl text-center md:pb-10 pb-5 font-bold">Equipment</h1>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 gap-2 md:grid-cols-3">
                {/* <div className="xl:col-span-4 lg:col-span-3 md:col-span-2  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3 gap-5"> */}
                {
                    dataLoadint ?
                        <div className="xl:col-span-5 lg:col-span-4 md:col-span-3  grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
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
                        products.slice(0, 5).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Link to={'/allEquipment'} className="w-full flex justify-center md:py-10 py-5">
                <button className="actionBtn">See All Equipment</button>
            </Link>
        </div >
    );
};

export default HomeProducts;