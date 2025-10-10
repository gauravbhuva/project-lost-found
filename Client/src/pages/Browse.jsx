import { useState } from 'react';
import ItemCard from '../components/ItemCard';

const allItems = [
  {
    id: 1,
    status: 'Found',
    timeAgo: '2 hours ago',
    title: 'Apple AirPods Pro',
    description: 'Found near the library entrance. In a black case with initials "JM" engraved.',
    location: 'Main Library, North Entrance',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    category: 'Electronics',
  },
  {
    id: 2,
    status: 'Lost',
    timeAgo: 'Yesterday',
    title: 'Calculus Textbook',
    description: 'Lost my calculus textbook. Has yellow highlights and notes on chapters 3-5.',
    location: 'Math Building, Room 204',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    category: 'Books',
  },
  {
    id: 3,
    status: 'Found',
    timeAgo: '3 days ago',
    title: 'Student ID Card',
    description: 'Found a student ID near the cafeteria. Name: Sarah Johnson.',
    location: 'Student Union, Cafeteria',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
    category: 'ID Cards',
  },
];

export default function Browse() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
    status: '',
    dateRange: '',
  });

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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Lost Items</h1>

        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
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
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">All Categories</option>
                  <option>Electronics</option>
                  <option>Books</option>
                  <option>ID Cards</option>
                  <option>Keys</option>
                  <option>Bags</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">All Statuses</option>
                  <option>Lost</option>
                  <option>Found</option>
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
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Any Time</option>
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Search Items
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
