'use client'
import { createContext, ReactNode, useContext } from "react";

// Define the shape of the context value
interface MyContextValue {
    isRegistered: boolean;
}

// Create the context with a default value (can be `null`)
const registerContext = createContext<MyContextValue | undefined>(undefined);

// Define props for the Provider
interface MyProviderProps {
    value: MyContextValue;
    children: ReactNode;
}

// Create the provider component
export const MyProvider: React.FC<MyProviderProps> = ({ value, children }) => {
    return <registerContext.Provider value={value}>{children}</registerContext.Provider>;
};

// Create a custom hook for consuming the context
const useRegisteredContext = (): MyContextValue => {
    const context = useContext(registerContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};

export default useRegisteredContext;