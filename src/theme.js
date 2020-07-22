import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import cyan from '@material-ui/core/colors/cyan'

export const Style = {
  BLUE: '#5C249B',
  TEAL: '#18BB99',
  BLACK: '#333',
  CHARCOAL: '#555',
  LIGHT_NAVBAR_COLOR: '#555',
  LIGHT_NAVBAR_TEXT: '#fff',
}

const commonPalette = {
  primary: {
    main: purple[500],
  },
  secondary: {
    main: cyan[500],
  },
}

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      ...commonPalette,
      type: 'light',
      background: {
        default: '#f7f7f7',
        paper: '#fff',
      },
    },
    overrides: {
      body: {
        backgroundColor: '#f7f7f7',
      },
      '@global': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        boxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
      },
      '.centered': {
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
      code: {
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
    },
  }),
)
