import ReactPlayer from 'react-player'

export default function Video() {
    return (
        <div className="video__player">
            <ReactPlayer
                    src='http://localhost:3000/aboutVideo.mp4'
                    controls={true}
                    light={<img src='http://localhost:3000/images/video_img.jpg' className="react-player__preview"/>}
                    // playIcon={<img src='http://localhost:3000/icons/video_img_icon.png'className='react-player__playicon'/>}
                    playing={true}
                    style={{
                        width: '71%',
                        height: 'auto',
                        aspectRatio: '16/10',
                        margin: '10rem auto',
                    }}
                />
        </div>
    )
}
