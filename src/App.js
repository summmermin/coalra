import Login from './test/Login';
import {Route, Routes} from 'react-router-dom';
import Panel from './test/Panel';
import Navbar from './test/Navbar';


function App() {

    return (<>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/test" element={<Navbar/>}/>
            {/*<Login/>*/}
        </Routes>
    </>);
}

export default App;
