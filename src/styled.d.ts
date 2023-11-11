import 'styled-components';
import { Theme } from './providers/ThemeProvider';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}