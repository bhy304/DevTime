import { css, type DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primary: {
      default: '#4C79FF',
      light: '#78B0FF',
    },
    secondary: {
      indigo: '#023E99',
      informative: '#2563EB',
      negative: '#DC2626',
      notice: '#FBBF24',
      positive: '#22C55E',
      fuchsia: '#FD28EC',
    },
    gray: {
      50: '#F9FAFB',
      100: '#F0F2F5',
      200: '#E5E7EB',
      300: '#CCD0D6',
      400: '#969DA8',
      500: '#717887',
      600: '#4B5563',
      700: '#394252',
      800: '#1F2937',
    },
    state: {
      disabled: '#969DA8',
    },
  },
  spacing: {
    2: '2px',
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    56: '56px',
    64: '64px',
    72: '72px',
  },
  typography: {
    heading: css`
      font-size: 1.5rem; // 24px
      line-height: 30px;
    `,
    title: css`
      font-size: 1.25rem; // 20px
      line-height: 24px;
    `,
    subtitle: css`
      font-size: 1.125rem; // 18px
      line-height: 22px;
    `,
    body: css`
      font-size: 1rem; // 16px
      line-height: 20px;
    `,
    bodysmall: css`
      font-size: 0.875rem; // 14px
      line-height: 18px;
    `,
    caption: css`
      font-size: 0.75rem; // 12px
      line-height: 16px;
    `,
    label: css`
      font-size: 0.5rem; // 12px
      line-height: 12px;
    `,
  },
  fontweight: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
  },
};

export default theme;
