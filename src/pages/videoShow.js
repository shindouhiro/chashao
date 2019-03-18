import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Img from '../images/mythofmerit_teaser.png' 
const styles = () => createStyles({
    wrap: {
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #ccc',
    },
    imgWrap: {

    },
    img: {
        width: '100%',
    },
    contentWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
    },
    content: {

    },
    hitsWrap: {
        color: '#999',
    }
})
const VideoShow = (props) => {
    const { classes } = props;
    return(
        <div className={classes.wrap}>
            <div className={classes.list}>
                <div className={classes.imgWrap}>
                    <img src={Img} className={classes.img} />
                </div>
                <div className={classes.contentWrap}>
                    <div className={classes.content}>
                    目前最全的花粥“原创”（抄袭）歌曲盘点
                    </div>
                    <div className={classes.hitsWrap}>
                        32.2万次观看
                    </div>
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.imgWrap}>
                    <img src={Img} className={classes.img} />
                </div>
                <div className={classes.contentWrap}>
                    <div className={classes.content}>
                    目前最全的花粥“原创”（抄袭）歌曲盘点
                    </div>
                    <div className={classes.hitsWrap}>
                        32.2万次观看
                    </div>
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.imgWrap}>
                    <img src={Img} className={classes.img} />
                </div>
                <div className={classes.contentWrap}>
                    <div className={classes.content}>
                    目前最全的花粥“原创”（抄袭）歌曲盘点
                    </div>
                    <div className={classes.hitsWrap}>
                        32.2万次观看
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(VideoShow);