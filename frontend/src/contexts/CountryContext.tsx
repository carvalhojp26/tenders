import { createContext, useContext, useState, ReactNode } from "react";

interface CountryContextType {
    country: string | undefined,
    setCountry: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CountryContext = createContext<CountryContextType | undefined>(undefined)

function CountryProvider ({children}: {children: ReactNode}) {
    const [country, setCountry] = useState<string | undefined>()

    return (
        <CountryContext.Provider value={{country, setCountry}}>
            {children}
        </CountryContext.Provider>
    )
}

export const useCountry = () => {
    const context = useContext(CountryContext);
    if (!context) throw new Error('useCountry must be used within a CountryProvider');
    return context;
};
  
export { CountryContext, CountryProvider}