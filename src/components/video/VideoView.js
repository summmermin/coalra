import {useState} from 'react';
import VideoPlayer from './VideoPlayer';
import Layout from '../layout/Layout';

const VideoView = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return <>
        <Layout>
            <button className="bg-[#eee] text-black"
                    onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '정지' : '재생'}</button>
            <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                         isPlaying={isPlaying}/>
        </Layout>
    </>;
};
export default VideoView;
