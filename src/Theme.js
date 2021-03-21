import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core"

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        img: {
          maxWidth: "100%",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#f6f6f6",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#fff",
      paper: "#f6f6f6",
    },
  },

  typography: {
    fontFamily: "'Poppins', Roboto, sans-serif",
  },
})

theme = responsiveFontSizes(theme)

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
