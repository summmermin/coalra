import './style/Layout.css';
import Navbar from '../../test/Navbar';
import Header from '../../test/header/Header';
import PageView from '../../test/main/PageView';

const Layout = (props) => {
    return <>
        <div className="flex flex-row w-[100vw]">
            <Navbar/>
            <div className="flex flex-col w-[100%]">
                <Header/>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    </>;
};
export default Layout;
