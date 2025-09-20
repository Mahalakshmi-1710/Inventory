import { useCartDispatch } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";

export default function Product({ product }) {
    const cartItems = useCart();
    const dispatchToCart = useCartDispatch();

    const onCartToggle = () => {
        if (cartItems.some((item) => item.productName === product.productName)) {
            dispatchToCart({
                type: "removed",
                ...product,
            });
        } else {
            dispatchToCart({
                type: "added",
                ...product,
            });
        }
    };

    return (
        <div className="w-[280px] p-4 m-3 flex flex-col items-center text-center rounded-2xl shadow-md bg-white/70 backdrop-blur-md border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
            <h1 className="font-extrabold text-xl text-gray-800 mb-2 drop-shadow"><b>{product.productName}</b></h1>
            <div className="w-[240px] h-[240px] overflow-hidden rounded-xl shadow-md">
                <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                />
            </div>
            <p className="text-lg font-semibold text-gray-700 mt-3">Price: ₹ {product.price.toFixed(2)}</p>
            <button
                onClick={onCartToggle}
                className={`mt-4 w-full font-semibold py-2 rounded-lg shadow-md transition duration-200 transform hover:scale-105 ${
                    cartItems.some((item) => item.productName === product.productName)
                        ? "bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white" 
                        : "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white"
                }`}
            >
                {cartItems.some((item) => item.productName === product.productName)
                    ? "Remove from Cart"
                    : "Add to Cart"}
            </button>
        </div>
    );
}
