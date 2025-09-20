import { useState } from "react";
import ProductList from "./ProductList";
import { useInventory } from "../../context/InventoryContext";

export default function ProductCatalog() {
    const inventory = useInventory();
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = inventory.filter(
        (item) =>
            item.stock > 0 &&
            item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center p-6">
            <div className="absolute insert-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-blue-100"></div>
            <h1 className="mx-2 mt-1 font-extrabold text-3xl text-gray-800 drop-shadow mb-4">PRODUCT CATALOG</h1>
            <div className="w-full max-w-lg mb-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 p-3 rounded-xl shadow-sm outline-none transition duration-200"
                />
            </div>
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p className="m-2 text-gray-500 italic animate-pulse">Sorry.. No products have found</p>
            )}
        </div>
    );
}
