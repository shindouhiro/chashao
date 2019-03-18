import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import cs from 'classnames';
const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
        height: 200,
      },
      slide1: {
        background: '#FEA900',
      },
      slide2: {
        background: '#B3DC4A',
      },
      slide3: {
        background: '#6AC0FF',
      },
}
const Swiper = (props) => {
    const { classes } = props;
    return(
        <SwipeableViews>
            <div className={cs(classes.slide, classes.slide1)}>
            slide n°1
            </div>
            <div className={cs(classes.slide, classes.slide2)}>
            slide n°2
            </div>
            <div className={cs(classes.slide, classes.slide3)}>
            slide n°3
            </div>
      </SwipeableViews>
    )
}

export default withStyles(styles)(Swiper)