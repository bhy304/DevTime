export type Color = {
  primary: {
    default: string;
    light: string;
  };
  secondary: {
    indigo: string;
    informative: string;
    negative: string;
    notice: string;
    positive: string;
    fuchsia: string;
  };
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
  state: {
    disabled: string;
  };
};
export type Spacing = 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72;
export type FontWeight = 'bold' | 'semibold' | 'medium' | 'regular';
export type FontStyle =
  | 'heading'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'bodysmall'
  | 'caption'
  | 'label';
export type Priority = 'primary' | 'secondary' | 'tertiary';
export type State = 'enabled' | 'disabled' | 'hover' | 'active' | 'focus';
