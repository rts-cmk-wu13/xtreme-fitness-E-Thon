import ReactPlayer from 'react-player'

export default function Video() {
    return (
        <ReactPlayer
                src='http://localhost:3000/media/video-dj-crowd1.mp4'
                controls={true}
                light={<img src='http://localhost:3000/bg/footerbg.jpg' className="react-player__preview"/>}
                playing={true}
                style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '16/9'
                }}
            />
    )
}
