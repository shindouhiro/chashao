import React from 'react';
import Card from '../Card/card';


const VideosIndex = (props) => {
    const { classes, list, source } = props;
    return(
        <div>
           <Card list={list} source="videos" title="视频"/>
        </div>
    )
}

export default VideosIndex