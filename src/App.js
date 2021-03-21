import React from "react"
import { CssBaseline } from "@material-ui/core"
import { css } from "@emotion/react"
import Theme from "./Theme.js"
import Header from "./Header.js"
import Men from "./Men.js"
import Women from "./Women.js"
import About from "./About.js"
import { Route, Routes } from "react-router-dom"
import Home from "./Home.js"
import BuyPage from "./BuyPage.js"

const App = () => {
  return (
    <Theme>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      {/* <BuyPage /> */}
    </Theme>
  )
}

export default App
