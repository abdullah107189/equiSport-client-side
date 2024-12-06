import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Swal from "sweetalert2";
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
    const categorys = ['All', 'Football', ' Cricket', 'Racket', 'Basketball']
    return (
        <div className="my-10">
            <h1 className="text-5xl text-center pb-10 font-bold">Euipments Section</h1>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 gap-2 md:grid-cols-3">
                <div>
                    <div className="col-span-1 flex  flex-col gap-2 sticky top-20 ">

                        {
                            categorys.map((category, idx) => <button className="btn hover:btn-accent" key={idx}>{category}</button>)
                        }
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-3 md:col-span-2  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    {
                        dataLoadint ?
                            <div className="xl:col-span-4 lg:col-span-3 md:col-span-2  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
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
                            products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;