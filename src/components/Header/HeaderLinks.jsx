/* eslint-disable */
import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Tooltip from 'material-ui/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';
import Button from '../../components/CustomButtons/Button';
import IconButton from '../../components/CustomButtons/IconButton';

import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
    <ListItem className={classes.listItem}>
      <Button
        href='#'
        color='transparent'
        className={classes.navLink}
      >
        <CloudDownload className={classes.icons} /> Report lost Items
      </Button>
    </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='#'
          color='transparent'
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Report Found Items
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href='#'
            target='_blank'
            color='transparent'
            className={classes.navLink + ' ' + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color='transparent'
            href='#'
            target='_blank'
            className={classes.navLink + ' ' + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color='transparent'
            href='#'
            target='_blank'
            className={classes.navLink + ' ' + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
