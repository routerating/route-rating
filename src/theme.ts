import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import cyan from '@material-ui/core/colors/cyan'

export enum Style {
  BLUE = '#5C249B',
  TEAL = '#18BB99',
  BLACK = '#333',
  CHARCOAL = '#555',
  LIGHT_NAVBAR_COLOR = '#555',
  LIGHT_NAVBAR_TEXT = '#fff',
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
  }),
)
