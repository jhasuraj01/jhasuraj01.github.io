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
        themePrimary: "#9A4DFF",
        themeSecondary: "#F1E6FF",
    },
    scroll: {
        thumb: "#CCCCCC",
        thumbHover: "#B3B3B3",
    },
};

const darkTheme: Theme = {
    color: {
        primary: "#9e9e9e",
        secondary: "#5A5A5A",
        themePrimary: "#a866ff",
        themeSecondary: "#4200a7",
    },
    background: {
        primary: "#0e1011",
        secondary: "#30007f",
        themePrimary: "#15191a",
        themeSecondary: "#080014",
    },
    border: {
        themePrimary: "#9A4DFF",
        themeSecondary: "#1a1a1a",
    },
    scroll: {
        thumb: "#CCCCCC",
        thumbHover: "#B3B3B3",
    },
};

export interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <StyledThemeProvider theme={lightTheme}>
          {children}
        </StyledThemeProvider>
    )
}

export function useTheme(): Theme {
    return useContext(StyledThemeContext);
}