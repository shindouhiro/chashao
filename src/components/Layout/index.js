import React, { Children } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

const LayoutCss = (props) => {
 const { children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
      { children}
    </React.Fragment>
  );
}

export default LayoutCss;