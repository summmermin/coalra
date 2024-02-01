import Login from './test/Login';
import {Route, Routes} from 'react-router-dom';
import AdminMain from './test/AdminMain';
import './test/Common.css';
import DownloadView from './test/DownloadView';
import VideoView from './components/video/VideoView';

function App() {

    return (<>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/admin-main" element={<AdminMain/>}/>
            <Route path="/download-view" element={<DownloadView/>}/>
            <Route path="/video-view" element={<VideoView/>}/>
            {/*<Login/>*/}
        </Routes>
    </>);
}

export default App;
