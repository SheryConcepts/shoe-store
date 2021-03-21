import { Paper, Typography } from "@material-ui/core"
import { css } from "@emotion/react"

const About = (props) => {
  return (
    <Paper
      css={css`
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        gap: 8px;
        margin: 16px;
      `}
    >
      <Typography
        css={css`
          grid-column: 6/8;
          grid-row: 1;
          justify-self: center;
        `}
        variant="h3"
      >
        Chike
      </Typography>
      <Typography
        variant="caption"
        css={css`
          grid-column: 6/7;
          grid-row: 2;
        `}
      >
        Just chew it!
      </Typography>
      <Typography
        variant="body1"
        css={css`
          grid-column: 4/10;
          grid-row: 3;
        `}
      >
        Throughout the history, footware has always been about wearing them. But
        we at Chike are revolutionizing the way history will remember shoes. We
        produce shoes with most rare leather available on planet earth, sometime
        we ship it from staurn. Just for you. So you can chew it with all your
        heart
      </Typography>
      <Typography
        variant="subtitle1"
        css={css`
          grid-column: 4/10;
          grid-row: 4;
        `}
      >
        Disclaimer: Please only chew Chike shoes when your wife is at her
        mothers.{" "}
      </Typography>
    </Paper>
  )
}

export default About
