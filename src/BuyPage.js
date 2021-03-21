import { Typography, Paper, Button } from "@material-ui/core"
import { data } from "./data.js"

const BuyPage = (props) => {
  return (
    <div>
      <Paper variant="outlined">
        <img src={src} alt={name} title={name} />
      </Paper>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
    </div>
  )
}

export default BuyPage
