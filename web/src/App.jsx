import styled, { createGlobalStyle } from "styled-components"
import Home from "./pages/Home"

const GlobalStyle = createGlobalStyle`
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

* {
box-sizing: border-box;
}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App