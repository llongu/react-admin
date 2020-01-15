import React, { ReactElement } from "react"
import { render } from "react-dom"
import Routes from "@/routes"
import ErrorBoundary from "@/components/ErrorBoundary" // error components

import AppContextProvider from "@/models/appContextProvider"
const App = (): ReactElement<HTMLElement> => (
  <AppContextProvider>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </AppContextProvider>
)

render(<App />, document.getElementById("app"))
