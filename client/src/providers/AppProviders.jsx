import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import { LoadingProvider } from '../contexts/LoadingContext';

import { Toaster } from 'react-hot-toast';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AuthProvider>
          {children}

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 3000,
            }}
          />
        </AuthProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default AppProviders;