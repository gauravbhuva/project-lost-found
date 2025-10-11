import { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import MainLayout from '@/Layout/MainLayout';
import { useItemsQuery } from "@hooks/useItems";

const getDateRange = (filter) => {
  const now = new Date();
  switch (filter) {
    case "24h":
      return { startDate: new Date(now - 24 * 60 * 60 * 1000), endDate: now };
    case "7d":
      return { startDate: new Date(now - 7 * 24 * 60 * 60 * 1000), endDate: now };
    case "30d":
      return { startDate: new Date(now - 30 * 24 * 60 * 60 * 1000), endDate: now };
    default:
      return { startDate: "", endDate: "" };
  }
};




export default function Browse() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
  });
  const [dateFilter, setDateFilter] = useState("any");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  useEffect(() => {
    setDateRange(getDateRange(dateFilter));
  }, [dateFilter]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with filters:', filters);
  };

  const { data, isLoading } = useItemsQuery({
    search:filters.searchTerm,
    category:filters.category,
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
  });

  console.log("===>data",data);
  

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Found Items</h1>

          <div className="bg-white shadow rounded-lg p-6">
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700">
                    Search Term
                  </label>
                  <input
                    type="text"
                    id="searchTerm"
                    name="searchTerm"
                    value={filters.searchTerm}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Search..."
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={dateFilter}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">All Categories</option>
                    <option value='electronics'>Electronics</option>
                    <option value='books'>Books</option>
                    <option value='id'>ID Cards</option>
                    <option value='keys'>Keys</option>
                    <option value='bags'>Bags</option>
                    <option value='accessories'>Accessories</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
                    Date Range
                  </label>
                  <select
                    id="dateRange"
                    name="dateRange"
                    value={filters.dateRange}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Any Time</option>
                    <option value='24h'>Last 24 hours</option>
                    <option value='7d'>Last 7 days</option>
                    <option value='30d'>Last 30 days</option>
                  </select>
                </div>
              </div>
              {/* <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Search Items
                </button>
              </div> */}
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data && data?.length > 0 ? data.map((item) => (
            <ItemCard key={data.id} item={item} />
          ))
        :
          <div className='w-dvw py-4'>
            <h4 className='text-center'>No Data Found</h4>
          </div>
        }
        </div>
      </div>
    </MainLayout>
  );
}