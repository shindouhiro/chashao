import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { videoJsOptions } from '../lib/playerConfig';
import VideoPlayer from '../lib/videoPlayer/VideoPlayer';
import Img from '../images/mythofmerit_teaser.png' 
import { RootNode } from '../gunDB';

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
class VideoShow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            video: {},
            loading: true,
            loadingVisited: true,
            gettingDownloadUrl: true,
        }
    }
    componentDidMount(){
        const { match } = this.props;
        
        RootNode.get("videos").map((video)=>(video && video.id===match.params.id)?video: undefined)
        .once((data, key)=>{
            const { video, loading} = this.state;
            if(loading ===false && video.id){
                return false;
            }
            document.title =  data.title;
            
            let updateCount = data.visited;
            if(!updateCount){
                updateCount=0
            }
            this.setState({
                video: data,
                loading: false,
            })

            
            RootNode.get("videos").get(key).get("visited").put(updateCount+1, (ack)=>{
                console.log(ack);
                this.setState({
                    loadingVisited: false,
                });
                console.log(data.magnetURI);
                
               
            });

        })
    }
    render() {
    const { classes } = this.props;
    const { video, loading, loadingVisited, gettingDownloadUrl} = this.state;
    console.log(video)
        return(
            <div className={classes.wrap}>
                <VideoPlayer 
                    {...videoJsOptions(
                        `
                        ${video.magnetURI}
                        `
                    )}
                />
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
}
   


export default withStyles(styles)(VideoShow);