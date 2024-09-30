import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import { CssBaseline } from "@mui/material";
import { Home } from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurants/RestaurantDetails";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      <Cart />
    </ThemeProvider>
  );
}

export default App;
