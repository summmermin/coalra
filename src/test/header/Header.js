import {Link} from 'react-router-dom';

const Header = () => {
    return <>
        <div
            className="header-contaniner min-h-[3.5rem] flex flex-row items-center justify-between transition duration-1000 ease-in-out">
            <div>Dashboard</div>
            <Link to="/">
                <img className="pr-3 cursor-pointer" src="/imgs/ic-user.png" alt="" width={40}/>
            </Link>
        </div>
    </>;
};
export default Header;
