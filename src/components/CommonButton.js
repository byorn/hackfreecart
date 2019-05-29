import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CreateIcon from '@material-ui/icons/Create';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }));

const CommonButton = (props)=>{
    const classes = useStyles();
    
    const jsxIcon = decideIcon(props.action, classes);

    return (
    <Button variant="outlined" size="medium" color={props.color}  className={classes.button}>
        { jsxIcon }
       { props.name }
    </Button>
    );
}

const decideIcon = (action, classes)=>{
  if(action === "Create"){
    return <CreateIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
  }else if(action === "Edit"){
    return <EditIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
  }
  else if(action === "Save"){
    return <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
  }
}

export default CommonButton;