import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App