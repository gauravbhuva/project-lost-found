import { FiMapPin } from 'react-icons/fi';

export default function ItemCard({ item }) {
  return (
    <div className="item-card bg-white overflow-hidden shadow rounded-lg">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              item.status === 'Found'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {item.status}
          </span>
          <span className="ml-2 text-sm text-gray-500">{item.timeAgo}</span>
        </div>
        <h3 className="mt-2 text-lg font-medium text-gray-900">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        <div className="mt-4 flex items-center">
          <FiMapPin className="h-4 w-4 text-gray-400" />
          <span className="ml-1 text-sm text-gray-500">{item.location}</span>
        </div>
        <div className="mt-4">
          <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            {item.status === 'Found' ? 'Contact Finder' : 'Contact Owner'}
          </button>
        </div>
      </div>
    </div>
  );
}
