import { createContext, useContext, Context,  } from 'react';

export interface Theme {
    color: string;
}

const lightTheme: Theme = {
    color: 'black',
}

export const ThemeContext: Context<Theme> = createContext<Theme>(lightTheme);

export interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    <ThemeContext.Provider value={lightTheme}>
      {children}
    </ThemeContext.Provider>
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}