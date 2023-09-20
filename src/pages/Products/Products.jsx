import { useActionData, useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { key } from "localforage";

const Products = () => {
    const {products} = useLoaderData();
    console.log(products)
    return (
        <div className="pl-8 mt-5 grid gap-5 md:grid-cols-3">
            {
                products.map(product => <ProductsCard key={product.id}  product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;