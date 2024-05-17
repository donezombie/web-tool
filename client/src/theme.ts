import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h6Bold: React.CSSProperties;
    h6Medium?: React.CSSProperties;
    captionLMedium?: React.CSSProperties;
    captionLRegular?: React.CSSProperties;
    captionLBold?: React.CSSProperties;
    captionMRegular?: React.CSSProperties;
    captionMBold?: React.CSSProperties;
    captionSRegular?: React.CSSProperties;
    bodyMBold?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h6Bold?: React.CSSProperties;
    h6Medium?: React.CSSProperties;
    captionLMedium?: React.CSSProperties;
    captionLRegular?: React.CSSProperties;
    captionLBold?: React.CSSProperties;
    captionMRegular?: React.CSSProperties;
    captionMBold?: React.CSSProperties;
    captionSRegular?: React.CSSProperties;
    bodyMBold?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h6Bold: true;
    h6Medium: true;
    captionLMedium: true;
    captionLRegular: true;
    captionLBold: true;
    captionMRegular: true;
    captionMBold: true;
    captionSRegular: true;
    bodyMBold: true;
  }
}

type Colors = {
  purple?: string;
  green?: string;
  red?: string;
  yellow?: string;
  blue?: string;
  white?: string;
  black?: string;
  gray?: string;
  gray2?: string;
  grayLight?: string;
  grayText?: string;
  grayActiveMenu?: string;
  border?: string;
  borderBaseAlpha?: string;
  borderInput?: string;
  borderInputLight?: string;
  borderIcon?: string;
  textGray?: string;
  borderLine?: string;
  text1?: string;
  text2?: string;
  text3?: string;
};

type Sizes = {
  heightNavbar: number;
  widthSidebar: number;
};

declare module '@mui/material/styles' {
  interface Theme {
    colors?: Colors;
    sizes?: Sizes;
  }
  interface ThemeOptions {
    colors?: Colors;
    sizes?: Sizes;
  }
}

const lightTheme = createTheme({
  typography: {
    fontFamily: `"Lato", sans-serif`,
    allVariants: {
      color: '#171919',
    },
    h6Bold: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '32px',
      letterSpacing: '-0.336px',
    },
    h6Medium: {},
    captionLMedium: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '-0.07px',
    },
    captionLRegular: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.07px',
    },
    captionLBold: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '-0.07px',
    },
    captionMBold: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '16px',
      letterSpacing: '-0.072px',
    },
    captionMRegular: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
    },
    captionSRegular: {
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '14px',
    },
    bodyMBold: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '26px',
      letterSpacing: '-0.216px',
    },
  },
  palette: {
    primary: {
      main: '#147b77',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: '#F2F2F2',
          },
        },
      ],
    },
  },
  sizes: {
    heightNavbar: 76,
    widthSidebar: 280,
  },
  colors: {
    purple: '#611f69',
    green: '#2eb67d',
    red: 'red',
    yellow: '#ecb22e',
    blue: '#36c5f0',
    white: '#fff',
    black: 'rgb(18, 18, 18)',
    gray: '#fafafb',
    gray2: '#ECEEEF',
    grayLight: '#F2F2F2',
    grayText: '#17191999',
    grayActiveMenu: '#f1f1f2',
    border: '#dde0e2',
    borderInput: '#e8ebeb',
    borderInputLight: '#ebeeef',
    borderIcon: '#f4f4f6',
    textGray: '#666c6e',
    borderLine: '#dfe2e7',
    borderBaseAlpha: 'rgba(23, 25, 25, 0.08)',
    text1: '#171919',
    text2: '#17191999',
    text3: '#666C6E',
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: `"Lato", sans-serif`,
    allVariants: {
      color: '#171919',
    },
    h6Bold: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '32px',
      letterSpacing: '-0.336px',
    },
    h6Medium: {},
    captionLMedium: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '-0.07px',
    },
    captionLRegular: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '-0.07px',
    },
    captionLBold: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '-0.07px',
    },
    captionMBold: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '16px',
      letterSpacing: '-0.072px',
    },
    captionMRegular: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
    },
    captionSRegular: {
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '14px',
    },
    bodyMBold: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '26px',
      letterSpacing: '-0.216px',
    },
  },
  palette: {
    primary: {
      main: '#147b77',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: '#F2F2F2',
          },
        },
      ],
    },
  },
  sizes: {
    heightNavbar: 76,
    widthSidebar: 280,
  },
  colors: {
    purple: '#611f69',
    green: '#2eb67d',
    red: 'red',
    yellow: '#ecb22e',
    blue: '#36c5f0',
    white: '#fff',
    black: 'rgb(18, 18, 18)',
    gray: '#fafafb',
    gray2: '#ECEEEF',
    grayLight: '#F2F2F2',
    grayText: '#17191999',
    grayActiveMenu: '#f1f1f2',
    border: '#dde0e2',
    borderInput: '#e8ebeb',
    borderInputLight: '#ebeeef',
    borderIcon: '#f4f4f6',
    textGray: '#666c6e',
    borderLine: '#dfe2e7',
    borderBaseAlpha: 'rgba(23, 25, 25, 0.08)',
    text1: '#171919',
    text2: '#17191999',
    text3: '#666C6E',
  },
});

const theme = (mode?: 'dark' | 'light') => (mode === 'dark' ? darkTheme : lightTheme);

export { theme };
