import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core"
import { css } from "@emotion/react"

const WomenItem = (props) => {
  const { name, src } = props
  return (
    <Card
      css={css`
        flex: 400px 1;
        margin: 8px;
      `}
    >
      <CardContent>
        <img src={src} title={name} alt={name} />
        <Typography variant="h6">{name}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Buy</Button>
      </CardActions>
    </Card>
  )
}

export default WomenItem
