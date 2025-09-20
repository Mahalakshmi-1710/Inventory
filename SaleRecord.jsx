const SaleRecord = ({ sale, saleId }) => {
    return (
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-5 transition hover:shadow-lg">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-gray-800">Sales #{saleId + 1}</h2>
                <span className="text-sm text-gray-500 italic">
                    {new Date(sale.datetime).toLocaleString()}
                </span>
            </div>
            <p className="mb-3 text-gray-700">
                <span className="font-semibold text-gray-900">Total Sales Value:</span>{" "} 
                <span className="text-green-600 font-bold">₹{sale.saleValue.toFixed(2)}</span>
            </p>
            <p className="mb-2 font-semibold text-gray-800">
                <strong>Basket Details:</strong>
            </p>
            <ul className="space-y-1 pl-4 text-gray-700 list-disc">
                {sale.products.map((product) => (
                    <li key={product.productName} className="flex justify-between text-sm">
                        <span>{product.productName} ({product.quantity}) - </span>
                        <span>₹{(product.price * product.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SaleRecord;
