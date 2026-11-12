import './VideoPlayer.css'
interface VideoPlayerProps {
    videoid: string,
    title?: string,
    extracto: string

}

import { useEffect } from 'react'

import YouTubePlayer from 'youtube-player';

function VideoPlayer(props: VideoPlayerProps) {
    
    useEffect(() => {
        const youtubePlayer = YouTubePlayer('youtube-player', {
            videoId: props.videoid,
        });
        youtubePlayer.playVideo()
    }, [props.videoid]);
    return (
        <>
        <div className="video_player">
            <figure className="image is-16by9">
                <div id="youtube-player"></div>
            </figure>
        </div>
        <div className="content mt-2">
            <h3 className="title is-3 has-text-dark has-text-weight-bold">{props.title}</h3><br/>
            <p className="has-text-dark has-text-justified">{props.extracto}</p><br />
            <p className="has-text-centered">
                <button className="button is-danger is-medium" type="button">
                    <a href={`https://www.youtube.com/watch?v=${props.videoid}`} target="_blank" rel="noopener noreferrer" className="has-text-white">
                        <i className="fa fa-youtube"></i> &nbsp;Ver en Youtube
                    </a>
                </button>
            </p>
        </div>
        </>
    )
}

export default VideoPlayer