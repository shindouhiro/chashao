import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { styles } from '../../css/common';
import Icon from '../../images/video.svg';
import TitleLayout from '../Common/title';
import { withStyles } from '@material-ui/core/styles';
const Card = (props) => {
    const { classes, list, source, title} = props;
    return(
      <div>
            <TitleLayout title={title} />
            <div className={classes.wrap}>
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} to={"/"+source+"/"+item.id}  className={classes.cardItem}>
                                <Paper className={classes.item}>
                                    <img src={item.coverUrl} className={classes.img}/>
                                    <div className={classes.iconWrap}>
                                        <img src={Icon} className={classes.icon}/>
                                        <div className={classes.hits}>
                                        {
                                            source==="posts"? 
                                            (item.visited? item.visited: 0) :
                                            (item.visited? item.visited: 0)
                                        }
                                        </div>
                                    </div>
                                    <div className={classes.title}>
                                       {item.title}
                                    </div>
                                </Paper>
                             </Link>
                        )
                    }) 
                    }
             </div>
      </div>  
      
    )
}

export default withStyles(styles)(Card)