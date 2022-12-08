import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import {
  createMuiTheme,
  CssBaseline,
  Link,
  Switch,
  ThemeProvider,
} from "@material-ui/core";
import { useContext } from "react";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

const Layout = ({ title, children, description }) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "1.5rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.3 rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode?'dark':"light",
      primary: {
        main: "#f0c000",
      },
    },
  });

const darkModeChangeHandler=()=>{
  dispatch({
    type: darkMode ? 'DARK_MODE_OFF' :'DARK_MODE_ON'
  })
  const newDarkMode= !darkMode;
    Cookies.set('darkMode',newDarkMode?'ON':'OFF')

}
  return (
    <div>
      <Head>
        <title>{title ? `${title}-Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Right reserved to @next-amazona</Typography>
      </footer>
    </div>
  );
};

export default Layout;
