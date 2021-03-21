import { Typography } from "@material-ui/core"
import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const Nav = (props) => {
  return (
    <div
      css={css`
        grid-column: 12/22;
        grid-row: 1;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
      `}
    >
      <Link
        to="/"
        css={css`
          flex: 1;
        `}
      >
        <Typography variant="h6">Home</Typography>
      </Link>
      <Link
        to="men"
        css={css`
          flex: 1;
        `}
      >
        <Typography variant="h6">Men</Typography>
      </Link>

      <Link
        to="women"
        css={css`
          flex: 1;
        `}
      >
        <Typography variant="h6">Women</Typography>
      </Link>
      <Link
        to="about"
        css={css`
          flex: 1;
        `}
      >
        <Typography variant="h6">About</Typography>
      </Link>
    </div>
  )
}

export default Nav
