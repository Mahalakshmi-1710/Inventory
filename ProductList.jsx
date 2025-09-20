import Product from "./Product";

export default function ProductList({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl px-4">
            {products.map((product) => {
                return <Product key={product.productName} product={product} />;
            })}
        </div>
    );
}
