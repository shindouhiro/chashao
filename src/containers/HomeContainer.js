import React from 'react';
import Swiper from '../components/Swiper/swiper';
import PostIndex from '../components/Post/postIndex';
import VideoIndex from '../components/Video/videoIndex';
import Card from '../components/Card/card';
import { RootNode } from '../gunDB';


class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          videos: [],
          posts: [],
          hotVideos: [],
          hotPosts: []
        }
      }
    
      componentWillMount(){
        const { videos, posts, hotVideos, hotPosts} = this.state;
        RootNode.get("videos")
        .map(
          (video) => (video && video.visited >=4) ? video:undefined
        ).once((data, key)=>{
          if(data===null){
            return false;
          }
    
          hotVideos.unshift(data);
          this.setState({
            hotVideos,
          })
          
        })
        RootNode.get("videos")
        .map(
          (video) => (video && video.status === "published") ? video:undefined
        ).once((data, key)=>{
          if(data===null){
            return false;
          }
    
          videos.unshift(data);
          this.setState({
            videos,
          })
          
        })
        //===================hostPost
        RootNode.get("posts")
        .map(
          (post) => (post && post.visited >= 4) ? post:undefined
        ).once((data, key)=>{
          if(data===null){
            return false;
          }
          
          hotPosts.unshift(data);
          this.setState({
            hotPosts,
          })
          
        })
        RootNode.get("posts")
        .map(
          (post) => (post && post.status === "published") ? post:undefined
        ).once((data, key)=>{
          if(data===null){
            return false;
          }
          
          posts.unshift(data);
          this.setState({
            posts,
          })
          
        })
      }
    render() {
        const { videos, posts, hotPosts, hotVideos } = this.state;
        console.log(posts)
        return(
            <div>
               <Swiper />
               <PostIndex posts={posts} source="posts"/>
               <VideoIndex list={hotVideos} source="videos"/>
               <Card list={hotPosts} source="posts" title="热点文章"/>
               <Card list={hotVideos} source="videos" title="热点视频"/>
            </div>
        )
    }
}
export default HomeContainer