import Navbar from './Navbar';
import PageView from './main/PageView';
import {useState} from 'react';

const AdminMain = () => {


    return <>
        <div className="flex flex-row">
            <Navbar/>
            <PageView/>
        </div>
    </>;
};
export default AdminMain;
