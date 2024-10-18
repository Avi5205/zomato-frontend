import {ThemeProvider} from "@emotion/react";
import "./App.css";
import {darkTheme} from "./Theme/DarkTheme";
import {CssBaseline} from "@mui/material";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        {/*<Navbar />*/}
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/*<Cart />*/}
      {/*    <Profile/>*/}
        <CustomerRouters/>
    </ThemeProvider>
  );
}

export default App;
