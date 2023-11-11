import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-snap-type: y proximity;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.background.primary};
    color: ${props => props.theme.color.primary};

    --color: ${props => props.theme.color.primary};
    --color-secondary: ${props => props.theme.color.secondary};
    --color-theme: ${props => props.theme.color.themePrimary};
    --color-nav: ${props => props.theme.background.secondary};
    --card-border: ${props => props.theme.border.themePrimary};
    --card-border-light: ${props => props.theme.border.themeSecondary};
    --background-theme: ${props => props.theme.background.themePrimary};
    --color-theme_deep: ${props => props.theme.color.themeSecondary};
    --background-theme_deep: ${props => props.theme.border.themePrimary}; 
    --scrollbar-thumb: ${props => props.theme.scroll.thumb};
    --scrollbar-thumb_hover: ${props => props.theme.scroll.thumbHover};
  }

  * {
    font-family: 'Comfortaa', system-ui;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  $scroll-bar-width: 12px;
  @mixin scrollbar {
    body {
      overflow: auto;
      overflow: overlay;
    }
    ::-webkit-scrollbar {
      width: $scroll-bar-width;
      height: $scroll-bar-width;
    }
    ::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      background-color: var(--scrollbar-thumb);
      border-radius: $scroll-bar-width;
    }
    ::-webkit-scrollbar-thumb:hover {
      border: 3px solid transparent;
      background-color: var(--scrollbar-thumb_hover);
      cursor: pointer;
    }
  }

  @media not screen and (hover: none) {
    @include scrollbar
  }

  @keyframes hvr-buzz-out {
    10% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }

    20% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }

    30% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }

    40% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }

    50% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }

    60% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }

    70% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }

    80% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }

    90% {
      -webkit-transform: translateX(1px) rotate(0);
      transform: translateX(1px) rotate(0);
    }

    100% {
      -webkit-transform: translateX(-1px) rotate(0);
      transform: translateX(-1px) rotate(0);
    }
  }

  .hvr-buzz-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }

  .hvr-buzz-out:hover,
  .hvr-buzz-out:focus,
  .hvr-buzz-out:active {
    -webkit-animation-name: hvr-buzz-out;
    animation-name: hvr-buzz-out;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`