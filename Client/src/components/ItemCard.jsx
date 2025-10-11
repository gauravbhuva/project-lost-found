import { FiMapPin } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

export default function ItemCard({ item, isAdmin,handleSubmit }) {
  const { createdAt } = item

  let timeAgo = 'Unknown time';
  if (createdAt) {
    const date = new Date(createdAt);
    if (!isNaN(date)) {
      timeAgo = formatDistanceToNow(date, { addSuffix: true });
    }
  }
  return (
    <div className="item-card bg-white overflow-hidden shadow rounded-lg">
      <div className="h-48 bg-gray-200 flex items-center justify-center  ">
        <img
          src={item?.image}
          alt={item?.itemName}
          className="h-full w-full object-contain "
        />
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.isActive
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
              }`}
          >
            {item.isActive && "Found"}
          </span>
          <span className="ml-2 text-sm text-gray-500">{timeAgo}</span>
        </div>
        <h3 className="mt-2 text-lg font-medium text-gray-900">{item?.itemName}</h3>
        <p className="mt-1 text-sm text-gray-500">{item?.description}</p>
        <div className="mt-4 flex items-center">
          <FiMapPin className="h-4 w-4 text-gray-400" />
          <span className="ml-1 text-sm text-gray-500">{item?.location}</span>
        </div>
        {
          isAdmin && (
            <div className="mt-4">
              <button 
              className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={() => handleSubmit(item?.id)}
              >
                Mark as found
              </button>
            </div>
          )
        }

      </div>
    </div>
  );
}
