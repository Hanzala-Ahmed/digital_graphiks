import React from "react";
import { Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home";
// import Extra from './Component/Extra'
const themeMenus = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 279,
      md: 575,
      lg: 768,
      xl: 990,
    },
  },
});
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={themeMenus}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
