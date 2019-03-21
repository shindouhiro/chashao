import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Title from '../Common/title';
import Img from '../../images/bg.jpeg';
import hits from '../../images/hits.svg';
const styles = (theme) => ({
    main: {
        width: '94%',
        margin: '0 auto',
    },
    wrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '-8px 0',
    },
    content: {
        padding: 6,
    },
    title: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '1em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 160,
    },
    intro: {
        padding: 6,
    },
    text: {
        width: 200,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    bgImage: {
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
        minHeight: 80,
        minWidth: 80,
        margin: '4px 4px 4px -12px',
    },
    hits: {
        color: '#ccc',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        width: 14,
        height: 14,
    },
    hitsText: {
        textIndent: '0.5em',
        margin: '0 0 0 20',
    },
    bgImg: {
        width: '100%',
        height: 80,
        padding: 4,
    },
    cardItem:  {
        maxWidth: 250,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        cursor: "pointer",
        textDecoration: "none",
        [theme.breakpoints.down('xs')]: {
          width: 165
        },
    },
})
const PostsIndex = (props) => {
    const { classes, posts, source } = props;
    console.log(posts)
    return (
        <div className={classes.main}>
            <Title title="文章" />
            {
                posts.map((post,index)=>{
                      return(
                        <Link key={index} to={`/${source}/${post.id}`} className={classes.cardItem}>
                        <Paper>
                            <div className={classes.wrap}>
                                <div className={classes.content}>
                                    <div className={classes.intro}>
                                        <div className={classes.title}>{post.title}</div>
                                        <div className={classes.text}>Diverse perspectives also serve as a preventive measure against costly and embarrassing errors. Some famous missteps in recent years that have been a direct consequence of the lack of diversity include:
                                                    </div>
                                        <div className={classes.hits}
                                        >
                                            <img src={hits} className={classes.icon} />
                                            <div className={classes.hitsText}>{post.visited? post.visited : 0}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={post.coverUrl} className={classes.bgImg}/>
                                </div>
                            </div>
                        </Paper>
                        </Link>
                      )          
                })
            }
        </div>
    )
}

export default withStyles(styles)(PostsIndex)