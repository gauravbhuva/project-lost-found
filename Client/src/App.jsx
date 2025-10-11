import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReportItem from './pages/ReportItem';
import Browse from './pages/Browse';
import About from './pages/About';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ReduxProvider from '@store/ReduxProvider';
import AdminLayout from '@/pages/Admin/AdminLayout';
import AdminDashboard from '@/pages/Admin/AdminDashboard';
import ManageUsers from '@/pages/Admin/ManageUsers';
import ManageItems from '@/pages/Admin/ManageItems';
import Settings from '@/pages/Admin/Settings';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { AuthGuard } from '@/hocs/AuthGuard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true
    }
  }
})

function App() {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">

              <main className="flex-grow">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />

                  {/* User Routes */}
                  <Route path="/" element={<Home />} />


                  {/* Protected Routes */}
                  <Route element={<AuthGuard />}>
                    <Route path="/admin" element={<AdminLayout />}>
                      <Route path="dashboard" element={<AdminDashboard />} />
                      <Route path="users" element={<ManageUsers />} />
                      <Route path="items" element={<ManageItems />} />
                      <Route path="settings" element={<Settings />} />
                    </Route>
                     <Route path="/report" element={<ReportItem />} />
                      <Route path="/browse" element={<Browse />} />
                      <Route path="/about" element={<About />} />
                  </Route>
                </Routes>
              </main>

            </div>
          </BrowserRouter>
        </ReduxProvider>
      </QueryClientProvider>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;