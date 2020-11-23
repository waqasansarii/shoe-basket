import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom'
import shopContext from '../context/context'
import './css/nav.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: '0px',
    zIndex: '1'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {

  const { addCart } = useContext(shopContext)
  const counter = addCart.counter
  // console.log(addCart.counter)

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className='web_name' to='/'>
              Store
          </Link>
          </Typography>
          <Link className='navBar_linking' to='/'>Home</Link>
          <Link className='navBar_linking' to='/product'>Product</Link>
          <Link
           className='navBar_linking'
           to='/cart'><AddShoppingCartIcon /> <span className='cart_count'>{counter}</span></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
