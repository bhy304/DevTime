import { css } from 'styled-components';
import { Color, Spacing, FontStyle, FontWeight } from './../types/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    spacing: Record<Spacing, string>;
    typography: Record<FontStyle, ReturnType<typeof css>>;
    fontweight: Record<FontWeight, number>;
  }
}
