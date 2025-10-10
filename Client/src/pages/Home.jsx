import { Link } from 'react-router-dom';
import {
  FiSmartphone,
  FiBook,
  FiCreditCard,
  FiKey,
  FiBriefcase,
  FiWatch,
  FiEdit,
  FiSearch,
  FiMessageSquare,
  FiArrowRight,
} from 'react-icons/fi';
import ItemCard from '../components/ItemCard';
import CategoryBadge from '../components/CategoryBadge';

const categories = [
  { icon: FiSmartphone, label: 'Electronics' },
  { icon: FiBook, label: 'Books' },
  { icon: FiCreditCard, label: 'ID Cards' },
  { icon: FiKey, label: 'Keys' },
  { icon: FiBriefcase, label: 'Bags' },
  { icon: FiWatch, label: 'Accessories' },
];

const recentItems = [
  {
    id: 1,
    status: 'Found',
    timeAgo: '2 hours ago',
    title: 'Apple AirPods Pro',
    description: 'Found near the library entrance. In a black case with initials "JM" engraved.',
    location: 'Main Library, North Entrance',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
  },
  {
    id: 2,
    status: 'Lost',
    timeAgo: 'Yesterday',
    title: 'Calculus Textbook',
    description: 'Lost my calculus textbook. Has yellow highlights and notes on chapters 3-5.',
    location: 'Math Building, Room 204',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
  },
  {
    id: 3,
    status: 'Found',
    timeAgo: '3 days ago',
    title: 'Student ID Card',
    description: 'Found a student ID near the cafeteria. Name: Sarah Johnson.',
    location: 'Student Union, Cafeteria',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=640&h=360',
  },
];

export default function Home() {
  return (
    <div>
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Lost something on campus?
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl">
              Our platform helps reunite students with their lost belongings through a secure and efficient system.
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link
                  to="/report"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Report Found Item
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/browse"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-dark/80 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Search Lost Items
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category, index) => (
            <CategoryBadge
              key={index}
              icon={category.icon}
              label={category.label}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Recently Added Items
            </h2>
            <Link to="/browse" className="text-primary hover:text-primary-dark font-medium transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Reuniting lost items with their owners in three simple steps
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <FiEdit className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">1. Report</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Submit details about your lost item or an item you've found with photos and location.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <FiSearch className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">2. Match</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Our system automatically matches similar items and notifies potential owners.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                    <FiMessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">3. Connect</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Securely message the finder/owner through our platform to arrange retrieval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Ready to find your lost item?</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Join thousands of students who have successfully reunited with their belongings.
            </p>
            <div className="mt-8">
              <Link
                to="/report"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-100 transition-colors"
              >
                Get Started
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
