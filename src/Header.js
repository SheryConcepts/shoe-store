import { Typography, Paper } from "@material-ui/core"
import Nav from "./Nav.js"
import { css } from "@emotion/react"
import { Outlet } from "react-router-dom"

const Header = (props) => {
  return (
    <div>
      <header>
        <Paper
          css={css`
            display: grid;
            grid-template-columns: repeat(24, minmax(0, 1fr));
          `}
        >
          <Typography
            variant="h1"
            css={css`
              grid-column: 2/7;
              grid-row: 1;
            `}
          >
            Chike
          </Typography>
          <Nav />
        </Paper>
      </header>
      <Outlet />
    </div>
  )
}

export default Header
