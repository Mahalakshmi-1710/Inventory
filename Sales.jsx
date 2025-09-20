import { useSales } from "../../context/SalesContext";
import SaleRecord from "./SaleRecord";

const Sales = () => {
    const sales = useSales();

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">SALES RECORD</h1>
            {sales.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {sales.map((sale, index) => (
                        <SaleRecord key={index} sale={sale} saleId={index} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-gray-500 mt-12">
                    <p className="text-lg font-medium">No sales recorded yet.</p>
                    <p className="text-sm">Start by adding your first transaction</p>
                </div>
            )}
        </div>
    );
};

export default Sales;
