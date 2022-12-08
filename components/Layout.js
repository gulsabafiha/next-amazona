import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import useStyles from "../utils/styles";

const Layout = ({ children }) => {
  const classes= useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazona</Typography>
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
