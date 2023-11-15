import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    /* Text Colors */
    --color-primary: ${props => props.theme.color.primary};
    --color-secondary: ${props => props.theme.color.secondary};
    --color-primary_theme: ${props => props.theme.color.themePrimary};
    --color-secondary_theme: ${props => props.theme.color.themeSecondary};
    /* Background Colors */
    --background-primary: ${props => props.theme.background.primary};
    --background-secondary: ${props => props.theme.background.secondary};
    --background-primary_theme: ${props => props.theme.background.themePrimary};
    --background-secondary_theme: ${props => props.theme.background.themeSecondary};
    /* Border Colors */
    --border-primary: ${props => props.theme.border.primary};
    --border-secondary: ${props => props.theme.border.secondary};
    --border-primary_theme: ${props => props.theme.border.themePrimary};
    --border-secondary_theme: ${props => props.theme.border.themeSecondary};
    /* Scrollbar Colors */
    --scrollbar-thumb: ${props => props.theme.scroll.thumb};
    --scrollbar-thumb_hover: ${props => props.theme.scroll.thumbHover};
  }
`