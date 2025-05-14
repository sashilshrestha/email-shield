import { Navigate, Outlet } from 'react-router';
import { useEffect, useState } from 'react';

export async function checkTokenExists() {
  try {
    const response = await fetch('http://localhost:8000/check-token');
    const data = await response.json();
    return data.token_exists;
  } catch (error) {
    console.error('Error checking token:', error);
    return false;
  }
}

export default function ProtectedRoute() {
  const [tokenExists, setTokenExists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTokenStatus = async () => {
      try {
        const result = await checkTokenExists();
        setTokenExists(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error during token status fetch:', error);
        setTokenExists(false); // Treat errors as no token
      }
    };

    fetchTokenStatus();
  }, []);

  // if (isLoading) return <div>Loading...</div>;

  // Render nothing while waiting for the token check to complete
  if (tokenExists === null) return null;

  // Redirect if the token doesn't exist
  if (!tokenExists) return <Navigate to="/settings" replace />;

  // Render the protected content if the token exists
  return <Outlet />;
}
