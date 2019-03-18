import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
const styles = () => ({
    navWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '4px 4px',
        padding: 6,
        color: 'rgba(0,0,0,.84)',
    },
    navTitle: {
        fontWeight: 700,
        fontSize: '1em',
    }
})
const Title = (props) => {
    const {classes, title} = props;
    return (
            <div className={classes.navWrap}>
                <div className={classes.navTitle}>
                    {title}
                </div>
                <div className={classes.navLink}>
                    查看更多
                </div>
            </div>
    )
}

export default withStyles(styles)(Title)