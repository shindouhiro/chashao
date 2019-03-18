import React from 'react';
import Swiper from '../components/Swiper/swiper';
import Title from '../components/Common/title';
import PostIndex from '../components/Post/postIndex';
import VideoIndex from '../components/Video/videoIndex';


class HomeContainer extends React.Component{
    render() {
        return(
            <div>
               <Swiper />
               <Title title="文章" />
               <PostIndex />
               <VideoIndex />
            </div>
        )
    }
}
export default HomeContainer