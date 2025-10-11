import { NavLink, Outlet } from 'react-router-dom';
import { FiGrid, FiUsers, FiClipboard, FiSettings } from 'react-icons/fi';

const adminNavLinks = [
  { to: '/admin/dashboard', icon: FiGrid, label: 'Dashboard' },
  { to: '/admin/users', icon: FiUsers, label: 'Manage Users' },
  { to: '/admin/items', icon: FiClipboard, label: 'Manage Items' },
  { to: '/admin/settings', icon: FiSettings, label: 'Settings' },
];

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul>
            {adminNavLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'
                    }`
                  }
                >
                  <link.icon className="h-5 w-5 mr-3" />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}