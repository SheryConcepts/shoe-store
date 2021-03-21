import { women } from "./data.js"
import { css } from "@emotion/react"
import WomenItem from "./WomenItem.js"

const Women = (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {women.map((item) => (
        <WomenItem name={item.name} key={item.name} src={item.url} />
      ))}
    </div>
  )
}

export default Women
