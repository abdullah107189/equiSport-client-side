import { useEffect, useState } from "react";
import Product from "../Product/Product";
const HomeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:4545/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
            <div className="col-span-1">
                category
            </div>
            <div className="xl:col-span-4 lg:col-span-3 md:col-span-2  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;