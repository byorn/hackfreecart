import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CategoryList extends React.Component {
  state = {
    checked: [0],
  };

  handleClick = obj => () => {
        
        this.props.onClick(obj);
  };

  handleDelete = obj => () => {
    this.props.onDelete(obj);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {this.props.items.map(item => (
            <ListItem key={item._id} role={undefined} dense button onClick={this.handleClick(item)}>
              <ListItemText primary={`${item.name}`} />
              <ListItemSecondaryAction >
                     <IconButton aria-label="Delete" onClick={this.handleDelete(item)}>
                        <DeleteIcon />
                      </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

CategoryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryList);