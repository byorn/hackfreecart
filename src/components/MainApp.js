import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { Route,BrowserRouter as Router,Switch,Link } from 'react-router-dom'
import Profile from './Profile';
import Catalog from './Catalog';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Config from '../util/Config';
import './MainApp.css';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    'background-image': 'url(\'/imgs/river.png\')',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    
  },
  drawerHeader:{
    height:'64px',
    backgroundColor:theme.background,
  }
});

class MainApp extends React.Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const baseURL=Config.getBaseURL();

    const drawer = (
      <div>
        <ListItem button component={Link} to='/profile' onClick={this.handleDrawerToggle}>
          <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" /> 
        </ListItem>   
        <Divider />
        <ListItem button component={Link} to='/profile' onClick={this.handleDrawerToggle}>
          <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
     
       </ListItem>
    
        <Divider />
        <ListItem button component={Link} to='/catalog' onClick={this.handleDrawerToggle}>
          <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
        </ListItem>
      </div>
    );

    return (
      <Router basename={baseURL}>
      <div className={classes.root}>
    
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
          
            <Typography variant="title" color="inherit" noWrap className={classes.flex}>
              HackFreeCart Admin
            </Typography>

                <IconButton
                  aria-owns='menu-appbar'
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose} component={Link} to='/catalog'>My Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Sign out</MenuItem>
         
                </Menu>

          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
          
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css" className="sidebar-background">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
        
          <div className={classes.toolbar} />
          <Typography noWrap>
          
          
          </Typography>
          <Switch>
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/catalog" component={Catalog} /> 
          </Switch>
        </main>
      
      </div>
      </Router>
    );
  }
}

MainApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainApp);