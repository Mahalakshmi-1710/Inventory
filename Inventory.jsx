import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import Product from "./Product";

const Inventory = () => {
    const inventory = useInventory()
    const [alertValue, setAlertValue] = useState(10)
    const [searchQuery, setSearchQuery] = useState("")
    const [showOnlyDepleted, setShowOnlyDepleted] = useState(false)

    const lowerCaseSearchQuery = searchQuery.toLowerCase()
    const filteredInventory = inventory.filter((product) => {
        const matchesSearchQuery = product.productName.toLowerCase().includes(lowerCaseSearchQuery);
        const isDepleted = product.stock < alertValue;
        return showOnlyDepleted ? (matchesSearchQuery && isDepleted) : matchesSearchQuery;
    })


    return (
        <div className="relative min-h-screen w-full flex flex-col items-center p-6">
            <div className="absolute insert-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100"></div>
            <h1 className="font-extrabold text-3xl text-gray-800 drop-shadow mb-6"><b>INVENTORY</b></h1>
            <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md shadow-md rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <input
                    type="text"
                    placeholder="Search inventory..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }}
                    className="flex-grow border border-gray-300 focus:border-blue-400 p-2 rounded-lg shadow-sm outline-none transition duration-200"
                />
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                        <label htmlFor="alert-value" className="font-medium text-gray-700">Alert Value</label>
                        <input
                            id="alert-value"
                            className="border :border-gray-300 focus:border-indigo-400 p-2 rounded-lg w-20 shadow-sm outline-none transition duration-200"
                            value={alertValue}
                            type="number"
                            onChange={(e) => setAlertValue(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="font-medium text-gray-700" htmlFor="show-only-depleted">Show Only Depleted</label>
                        <input
                            className="w-5 h-5 accent-indigo-500"
                            id="show-only-depleted" 
                            type="checkbox" 
                            checked={showOnlyDepleted} 
                            onChange={() => {
                                setShowOnlyDepleted(!showOnlyDepleted)
                            }}
                        />
                    </div>
                </div>
            </div>
            {filteredInventory.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    {filteredInventory.map((product) => (
                        <Product key={product.productName} product={product} alertValue={alertValue} />
                    ))}
                </div>
            ) : (
                <p className="m-6 text-gray-500 italic animate-pulse">No inventory items found.</p>
            )}
        </div>
    );
};

export default Inventory;
