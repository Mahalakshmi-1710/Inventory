import { useCartDispatch } from "../../context/CartContext";
import { useInventory } from "../../context/InventoryContext";

export default function CartItem({ product }) {
    const dispatchToCart = useCartDispatch();
    const inventory = useInventory();
    const productInInventory = inventory.find(item => item.productName === product.productName);

    const stockAvailable = productInInventory ? productInInventory.stock : 0;

    return (
        <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-4 m-3 w-[280px] flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h1 className="font-bold text-xl text-gray-800 mb-2 drop-shadow">{product.productName}</h1>
            <div className="w-[240px] h-[240px] overflow-hidden rounded-xl shadow-md">
                <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                />
            </div>
            <p className="text-lg font-semibold text-gray-700 mt-3">Price: ₹ {product.price.toFixed(2)}</p>
            <div className="flex items-center justify-center gap-3 mt-3">
                {product.quantity > 1 ? (
                    <button
                        onClick={() => {
                            dispatchToCart({
                                type: 'DEC_QTY',
                                ...product,
                            });
                        }}
                        className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-3 py-1 rounded-lg font-bold shadow-md transition duration-200 hover:scale-110"
                    >
                        -
                    </button>
                ) : (
                    <button disabled className="bg-gray-300 text-white px-3 py-1 rounded-lg font-bold shadow-md">
                        -
                    </button>
                )}
                <span className="text-lg font-bold text-gray-800">{' '}{product.quantity}{' '}</span>
                {product.quantity < stockAvailable ? (
                    <button
                        onClick={() => {
                            dispatchToCart({
                                type: 'INC_QTY',
                                ...product,
                            });
                        }}
                        className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-3 py-1 rounded-lg font-bold shadow-md transition duration-200 hover:scale-110"
                    >
                        +
                    </button>
                ) : (
                    <button disabled className="bg-gray-300 text-white px-3 py-1 rounded-lg font-bold shadow-md">
                        +
                    </button>
                )}
            </div>
            <button
                onClick={() => {
                    dispatchToCart({
                        type: 'removed',
                        ...product,
                    });
                }}
                className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200 hover:scale-105"
            >
                Remove from Basket
            </button>
        </div>
    );
}
