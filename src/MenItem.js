import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core"
import { css } from "@emotion/react"

const MenItem = (props) => {
  const { src, name } = props
  return (
    <Card
      css={css`
        margin: 8px;
        flex: 300px 1;
      `}
    >
      <CardContent>
        <img src={src} alt={name} title={name} />
        <Typography variant="h6">{name}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Buy</Button>
      </CardActions>
    </Card>
  )
}

export default MenItem
