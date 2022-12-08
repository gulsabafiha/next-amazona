import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Link } from "@material-ui/core";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href='/cart' passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href='/login' passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Right reserved to @next-amazona</Typography>
      </footer>
    </div>
  );
};

export default Layout;
