import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    --color: ${props => props.theme.color.primary};
    --color-secondary: ${props => props.theme.color.secondary};
    --color-theme: ${props => props.theme.color.themePrimary};
    --color-nav: ${props => props.theme.background.secondary};
    --card-border: ${props => props.theme.border.themePrimary};
    --card-border-light: ${props => props.theme.border.themeSecondary};
    --background-theme: ${props => props.theme.background.themePrimary};
    --color-theme_deep: ${props => props.theme.color.themeSecondary};
    --background-theme_deep: ${props => props.theme.background.themeSecondary}; 
    --scrollbar-thumb: ${props => props.theme.scroll.thumb};
    --scrollbar-thumb_hover: ${props => props.theme.scroll.thumbHover};
  }
  body {
    background: ${props => props.theme.background.primary};
    color: ${props => props.theme.color.primary};
  }
`