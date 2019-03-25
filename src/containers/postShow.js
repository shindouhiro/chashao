import React from  'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Img from '../images/20190314115321A5j1BfL2PxN9eDcz.jpeg';
import Tag from '../components/Tag/tag';
import renderHTML from 'react-render-html';
import { RootNode } from '../gunDB';
const styles = () => createStyles({
   wrap: {
     width: '96%',
     margin: '0 auto',
     display: 'flex',
     flexDirection: 'column',
     overflowX: 'hidden',
   },
   title: {
    padding: '14px 0 12px',
    color: '#000',
    fontSize: 24,
    fontWeight: 700,
    fontFamily: 'Arial,STHeiti,华文黑体,Microsoft YaHei,微软雅黑,SimSun,宋体,Helvetica,Tahoma,Arial sans-serif',
    marginBlockStart:'0.67em',
    marginBlockEnd: '0.67em',
    marginInlineStart: 0,
    marginInlineEnd: 0,
    fontWeight: 'bold',
   },
   img: {
       width: '100%',
   },
   ImgWrap: {
    margin: '6px  0',
   },
   content: {
    textIndent: 20,
    fontFamily: 'Arial,STHeiti,华文黑体,Microsoft YaHei,微软雅黑,SimSun,宋体,Helvetica,Tahoma,Arial sans-serif',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'justify',
    color: '#363636',
    overflowX: 'hidden',
   },
})
class PostShow extends React.Component{
    constructor(props) {
        super(props);
        RootNode.get('status').put("online");
        this.state = {
            post: {},
            loading: true,
            loadingVisited: true,
        }
    }
    componentDidMount(){
    
        const { match } = this.props;
        RootNode.get("posts").map((post)=>(post && post.id===match.params.id)?post: undefined)
        .once((data, key)=>{
            const { post, loading} = this.state;
            if(loading ===false && post.id){
                return false;
            }
            document.title =  data.title;
            let updateCount = data.visited;
            if(!updateCount){
                updateCount=0
            }
            this.setState({
                post: data,
                loading: false,
            })
            RootNode.get("posts").get(key).get("visited").put(updateCount+1, (ack)=>{
                this.setState({
                    loadingVisited: false,
                })
               
            });

        })
        
       
        
    }
    render(){
        const { classes } = this.props;
        const { post, loading, loadingVisited} = this.state;
        document.body.scrollTop = document.documentElement.scrollTop = 154;
        return(
                <div className={classes.wrap}>
                    <div className={classes.title}>
                    {post.title}
                    </div>
                    <div className={classes.ImgWrap}>
                        <img src={post.coverUrl} className={classes.img} />
                    </div>
                    <div className={classes.content}>
                    {   
                                    post.body ? 
                                    renderHTML(post.body) 
                                    : 
                                    renderHTML("<span></span>")
                                
                      }
                    </div>
                    <Tag />
                </div>
        )
    }
   
}


export default withStyles(styles)(PostShow);