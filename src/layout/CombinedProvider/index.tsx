import { Theme, ThemeProvider } from '@mui/material';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

export interface LayoutContextValue {}

const LayoutContext = createContext<LayoutContextValue>({});

interface CombinedProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const CombinedProvider: React.FC<CombinedProviderProps> = ({ children, theme }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </LayoutContext.Provider>
  );
};

export default CombinedProvider;
