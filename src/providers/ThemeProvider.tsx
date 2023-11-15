import { useContext,  } from 'react';
import {
    ThemeContext as StyledThemeContext,
    ThemeProvider as StyledThemeProvider
} from 'styled-components';

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
        primary: "hsl(0, 0%, 15%)",
        secondary: "hsl(0, 0%, 35%)",
        themePrimary: "hsl(266, 100%, 60%)",
        themeSecondary: "hsl(0, 0%, 100%)",
    },
    background: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(266, 100%, 75%)",
        themePrimary: "hsl(266, 100%, 65%)",
        themeSecondary: "hsl(266, 100%, 95%)",
    },
    border: {
        primary: "hsl(0, 0%, 50%)",
        secondary: "hsl(0, 0%, 95%)",
        themePrimary: "hsl(266, 100%, 65%)",
        themeSecondary: "hsl(266, 100%, 85%)",
    },
    scroll: {
        thumb: "hsl(0, 0%, 70%)",
        thumbHover: "hsl(0, 0%, 60%)",
    },
};

const darkTheme: Theme = {
    color: {
        primary: "hsl(0, 0%, 80%)",
        secondary: "hsl(0, 0%, 60%)",
        themePrimary: "hsl(266, 100%, 75%)",
        themeSecondary: "hsl(266, 100%, 5%)",
    },
    background: {
        primary: "hsl(0, 0%, 10%)",
        secondary: "hsl(266, 100%, 75%)",
        themePrimary: "hsl(266, 100%, 75%)",
        themeSecondary: "hsl(266, 100%, 1%)",
    },
    border: {
        primary: "hsl(0, 0%, 50%)",
        secondary: "hsl(0, 0%, 7%)",
        themePrimary: "hsl(266, 100%, 65%)",
        themeSecondary: "hsl(266, 100%, 50%)",
    },
    scroll: {
        thumb: "hsl(0, 0%, 30%)",
        thumbHover: "hsl(0, 0%, 40%)",
    },
};

export interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <StyledThemeProvider theme={darkTheme}>
          {children}
        </StyledThemeProvider>
    )
}

export function useTheme(): Theme {
    return useContext(StyledThemeContext);
}