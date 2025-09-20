import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";
import { useCartDispatch } from "../../context/CartContext";
import { useInventoryDispatch } from "../../context/InventoryContext";
import { useSalesDispatch } from "../../context/SalesContext";

export default function Cart() {
    const inventoryDispatch = useInventoryDispatch();
    const cartItemsFromContext = useCart();
    const cartDispatch = useCartDispatch();
    const saleDispatch = useSalesDispatch();
    let count = 0;
    let cartValue = 0;
    if (cartItemsFromContext.length > 0)
        cartItemsFromContext.forEach((item) => {
            cartValue = cartValue + (item.price * item.quantity);
            count = count + (item.quantity);
        });

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start p-6" >
            {/* 3D gradient background */}
            <div className="absolute insert-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100">
                <div className="absolute insert-0 bg-[url('https://cdn-icons-png.flaticon.com/512/263/263142.png')] bg-center bg-repeat opacity-5 blur-3xl"></div>
            </div>
            <h1 className="text-3xl font-extrabold mb-4 mx-2 text-gray-800 drop-shadow-lg">HI! WELCOME TO YOUR BASKET</h1>
            {count === 0 ? (
                <p className="text-lg text-gray-600 mx-2 italic animate-pulse">Ohh... Your basket is empty.</p>
            ) : (
                <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-4">
                    <p className="mx-2 text-lg text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span>
                            No. of items in your basket: <b>{count}</b> | Total Basket Value: <b>{cartValue.toFixed(2)}</b>
                        </span>
                        <span className="flex gap-3 mt-3 sm:mt-0">
                            <button onClick={() => {
                            cartItemsFromContext.forEach((cartItem) => {
                                inventoryDispatch({
                                    type: 'STOCK_SOLD',
                                    productName: cartItem.productName,
                                    stock: cartItem.quantity,
                                })
                            });
                            saleDispatch({
                                type: 'NEW_SALE',
                                saleValue: cartValue,
                                products: cartItemsFromContext,
                            });
                            cartDispatch({
                                type: 'EMPTY_CART',
                            });
                            alert('Checkout successful! Inventory has been updated.');
                        }} className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-lg px-4 py-2 shadow-md transform transition duration-200 hover:scale-105">Checkout Basket</button>
                        <button onClick={() => {
                            cartDispatch({
                                type: 'EMPTY_CART',
                            });
                        }} className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold rounded-lg px-4 py-2 shadow-md transform transition duration-200 hover:scale-105">Clear Basket</button>
                        </span>      
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        {cartItemsFromContext.map((product) => (
                            <CartItem key={product.productName} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
