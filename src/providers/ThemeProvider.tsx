import { useContext, useState, createContext, useMemo, useCallback } from 'react';
import {
  ThemeContext as StyledThemeContext,
  ThemeProvider as StyledThemeProvider
} from 'styled-components';


export type ThemeName = 'dark' | 'light'

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

const themeMap: Record<ThemeName, Theme> = {
  light: lightTheme,
  dark: darkTheme,
}

export interface IThemeContext {
  toggleTheme: () => void
  themeName: ThemeName
  theme: Theme
}

const defaultThemeState: IThemeContext = {
  toggleTheme: () => { },
  themeName: 'dark',
  theme: themeMap['dark'],
}

const ThemeContext = createContext<IThemeContext>(defaultThemeState)

export interface ThemeProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export function ThemeProvider({ children }: ThemeProviderProps) {

  const [themeName, setThemeName] = useState<ThemeName>(defaultThemeState.themeName);

  const toggleTheme = useCallback(() => {
    if (themeName === 'dark') setThemeName('light')
    else setThemeName('dark')
  }, [setThemeName, themeName])

  const themeContextValue: IThemeContext = useMemo<IThemeContext>(() => ({
    toggleTheme,
    theme: themeMap[themeName],
    themeName,
  }), [toggleTheme, themeName])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={themeMap[themeName]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): IThemeContext {
  return useContext(ThemeContext);
}