import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,

} from "@material-ui/core";
import NextLink from "next/link";
import Layout from "../components/Layout";
import data from "../utils/data";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Product</h1>
        <Grid spacing={3} container>
          {data.products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
             <NextLink href={`/product/${product.slug}`} passHref>
             <CardActionArea>
                  <CardMedia
                    component="img"
                    title={product.name}
                    image={product.image}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
             </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size='small' color="primary" >Add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
