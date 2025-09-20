const NavBar = () => {
    return (
      <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-4">
            <a href="/" className="px-3 py-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition">
                Store
              </a>
              <a href="/cart" className="px-3 py-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition">
                Basket
              </a>
              <a href="/inventory" className="px-3 py-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition">
                Inventory
              </a>
              <a href="/sales" className="px-3 py-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition">
                Sales
              </a>
              <a href="/add-product" className="px-3 py-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition">
                Add Products
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <h2 className="text-white text-xl font-extrabold tracking-wide">A-Z Store</h2>
              <img className="w-8 h-8 drop-shadow-sm" src="/inventoryLogo.png" alt="LOGO" />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavBar;
  