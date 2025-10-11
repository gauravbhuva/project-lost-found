import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verifyToken } from '@/redux-store/slices/auth';
import { Navigate, Outlet, useParams } from 'react-router';
import PageLoader from '@componants/PageLoader';
// import { rolePermissions } from '@/Router/permission';
import { useQuery } from "@tanstack/react-query";


export const AuthGuard = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isVerifying } = useSelector((state) => state.authReducer);

  const { isLoading } = useQuery({
    queryKey: ["verifyToken"],
    queryFn: () => dispatch(verifyToken()).unwrap(),
    refetchOnWindowFocus: true,     // 👈 will refetch when user switches tab / focuses window
    refetchOnReconnect: true,       // 👈 will refetch on network reconnect
    staleTime: 10 * 1000,               
    retry: false,                   // disable retries (optional)
  });

 
  if (isVerifying || isLoading) {
    return <PageLoader /> // or your spinner component
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// export function ProtectedRoute({ element, route }) {
//   const { role } = useParams(); // role comes from URL (/:role/dashboard)

//   const allowedRoutes = rolePermissions[role] || [];

//   if (!allowedRoutes.includes(route)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return element;
// }