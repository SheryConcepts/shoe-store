import { css } from "@emotion/react"
import { men } from "./data"
import MenItem from "./MenItem.js"

const Men = (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        /* margin: 16px; */
      `}
    >
      {men.map((item) => (
        <MenItem name={item.name} src={item.url} key={item.name} />
      ))}
    </div>
  )
}

export default Men
