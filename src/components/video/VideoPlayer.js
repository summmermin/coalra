import {useEffect, useRef} from 'react';

const VideoPlayer = ({src, isPlaying, width}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    });
    return <>
        <video ref={ref} src={src} loop playsInline width={width}/>
    </>;
};
export default VideoPlayer;
