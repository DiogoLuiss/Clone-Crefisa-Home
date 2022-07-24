import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './GlobalStyled'
import Home from './pages/home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Home /> <GlobalStyle />
  </>
)
