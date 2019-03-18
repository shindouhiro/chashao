import React from 'react';
import Swiper from '../components/Swiper/swiper';
import PostIndex from '../components/Post/postIndex';
import VideoIndex from '../components/Video/videoIndex';


class HomeContainer extends React.Component{
    render() {
        return(
            <div>
               <Swiper />
               <PostIndex />
               <VideoIndex />
            </div>
        )
    }
}
export default HomeContainer