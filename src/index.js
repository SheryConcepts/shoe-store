import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter as Router } from "react-router-dom"

let root = document.getElementById("root")

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
