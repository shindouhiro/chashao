import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const HomeLink = props => <RouterLink to="/" {...props} />
const PostLink = props => <RouterLink to="/post" {...props} />
const VideoLink = props => <RouterLink to="/video" {...props} />


const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
 };

const Sidebar = (props) => {
    const { classes, handleDrawerClose} = props
    return(
        <div className={classes.list}>
            <List>
                <Link component={HomeLink} >
                    <ListItem button key={0} onClick={handleDrawerClose}>
                    <ListItemIcon> <InboxIcon /></ListItemIcon>
                    <ListItemText primary="首页" />
                    </ListItem>
                </Link>
                <Link component={PostLink}>
                    <ListItem button key={1} onClick={handleDrawerClose}>
                    <ListItemIcon> <InboxIcon /></ListItemIcon>
                    <ListItemText primary="文章" />
                    </ListItem>
                </Link>
                <Link component={VideoLink}>
                    <ListItem button key={2} onClick={handleDrawerClose}>
                    <ListItemIcon> <InboxIcon /></ListItemIcon>
                    <ListItemText primary="视频" />
                    </ListItem>
                </Link>
               
            </List>
      </div>
    )
}

export default withStyles(styles)(Sidebar)