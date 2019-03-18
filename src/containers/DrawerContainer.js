import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import SideBar from '../components/Sidebar/sidebar';
import { withStyles } from '../../node_modules/@material-ui/core';
const styles = {
    fullList: {
      width: 'auto',
    },
  };

class DrawerContainer extends React.Component {
    render() {
        const { classes, open, toggleDrawer} = this.props;
        return(
            <div>
                <Drawer open={open} onClose={toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleDrawer('left', false)}
                        onKeyDown={toggleDrawer('left', false)}
                    >
                        <SideBar />
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(DrawerContainer)