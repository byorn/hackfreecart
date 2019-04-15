import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProductList from './ProductList';
class Catalog extends Component{

    render(){
        return <Grid container>
                <Grid item xs={2} ms={2} lg={2}>
                        <Typography variant="headline" component="h3">
                        Products
                        </Typography>
                        <Typography component="p">
                        Manage Products
                        </Typography>     
                </Grid> 
                <Grid item xs={2} ms={2} lg={2}>
                        <ProductList/>
                </Grid> 
               </Grid>
    }

}
export default Catalog;