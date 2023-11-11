import { createContext, useContext, Context,  } from 'react';

export interface Theme {
    color: {
        primary: string
        secondary: string
        themePrimary: string
        themeSecondary: string
    }
    background: {
        primary: string
        secondary: string
        themePrimary: string
        themeSecondary: string
    }
    border: {
        primary: string
        secondary: string
        themePrimary: string
        themeSecondary: string
    }
    scroll: {
        thumb: string
        thumbHover: string
    }
}

const lightTheme: Theme = {
    color: {
        primary: "#303030",
        secondary: "#5A5A5A",
        themePrimary: "#8D33FF",
        themeSecondary: "#FFFFFF",
    },
    background: {
        primary: "#FFFFFF",
        secondary: "#B780FF",
        themePrimary: "#F1E6FF",
        themeSecondary: "#9A4DFF",
    },
    border: {
        primary: "#303030",
        secondary: "#5A5A5A",
        themePrimary: "#9A4DFF",
        themeSecondary: "#F1E6FF",
    },
    scroll: {
        thumb: "#CCCCCC",
        thumbHover: "#B3B3B3",
    },
};

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