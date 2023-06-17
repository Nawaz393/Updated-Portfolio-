import React, { createContext, useContext, useState } from 'react';

interface MyContextType {
  darkmode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [darkmode, setDarkMode] = useState(false);

  return (
    <MyContext.Provider value={{ darkmode, setDarkMode }}>
      {children}
    </MyContext.Provider>
  );
};
export const useMyContext = () => {

    const context = useContext(MyContext);
    
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    
    return context;
    }