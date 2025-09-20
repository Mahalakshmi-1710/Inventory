import { useInventoryDispatch } from "../context/InventoryContext";

export default function AddProduct() {
    const dispatchToInventory = useInventoryDispatch()

    const onAddProduct = (e) => {
        e.preventDefault()

        const newProduct = {
            productName: e.target.productName.value,
            imageUrl: e.target.imageUrl.value,
            price: parseFloat(e.target.price.value),
            tags: e.target.tags.value.split(",").map((tag) => tag.trim()),
            stock: e.target.stock.value,
        }

        dispatchToInventory({
            type: 'NEW_PRODUCT',
            ...newProduct,
        })

        e.target.reset()
        alert("Product added successfully!")
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-2xl mt-8 mb-6 transition-transform hover:scale-[1.01]">
            <h1 className="font-extrabold text-3xl text-center mb-8 text-gray-800 tracking-tight">
                Add New Product
            </h1>
            <form onSubmit={onAddProduct} className="space-y-5">
                <div>
                    <label
                        htmlFor="productName"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                        PRODUCT NAME
                    </label>
                    <input
                        id="productName"
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm transition"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="imageUrl"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                        PRODUCT IMAGE URL
                    </label>
                    <input
                        id="imageUrl"
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm transition"
                        placeholder="Enter image URL"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                        PRICE
                    </label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm transition"
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="stock"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                        STOCK
                    </label>
                    <input
                        id="stock"
                        type="number"
                        step="0.01"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm transition"
                        placeholder="Enter stock"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="tags"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                        TAGS (comma-separated)
                    </label>
                    <input
                        id="tags"
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm transition"
                        placeholder="Enter tags, separated by commas"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 active:scale-95 transition-transform shadow-md"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}
