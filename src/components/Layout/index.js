import React, { Children } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/header'
import { withStyles } from '@material-ui/core/styles';
const styles = {
   main: {
       margin: '60px 0',
   }
 }

const LayoutCss = (props) => {
 const { classes, children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
       <Header />
      {/* The rest of your application */}
      <div className={classes.main}>
         { children}
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(LayoutCss);