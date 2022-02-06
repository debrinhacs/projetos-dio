import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const HomePage = () => {
    
    const urlAtual = window.location.href;
    const query =  urlAtual.split('?category=');
    const categoryname = (query[1]!== undefined ? query[1]:null);
    
    const products = useSelector(state => state.products)
    const classes = useStyles();
   

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )     

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count ={};

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return(
        <Grid container  className={classes.root}>
            <Grid item={true} xs={3}  align-items="stretch" flex-wrap="wrap">
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        {category.map(
                            category => {
                                return (
                                    <Item
                                        key = {category.id} 
                                        name= {category.name}
                                        details={count[category.name]}
                                        linkUrl= {`?category=${category.id}`}
                                    />
                                )
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
            <Grid container  align-items="stretch" flex-wrap="wrap" xs={8} spacing={3} className={classes.root}>
                {products.filter(function (category) {
                            if(categoryname !== null){
                                return category.id_categorys === parseInt(categoryname);
                            }else{
                                return category.id_categorys;
                            }
                        }).map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage;
