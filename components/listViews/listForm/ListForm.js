import './style/ListForm.css';
import Heading from '../../ui/Heading';
import {useState} from 'react';

const ListForm = (props) => {
    const [uName, setUName] = useState('');
    const [uEmail, setUEmail] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return <>
        <div className="list_form">
            <Heading content="회원등록하기"/>
            <form onSubmit={submitHandler}>
                <div className="input_group">
                    <label htmlFor="uName">이름</label>
                    <input type="text" name="uName" id="uName" onChange={(e) => {
                        setUName(e.target.value);
                    }}/>
                </div>
                <div className="input_group">
                    <label htmlFor="uEmail">이메일</label>
                    <input type="text" name="uEmail" id="uEmail" onChange={(e) => {
                        setUEmail(e.target.value);
                    }}/>
                </div>
                <div className="input_group">
                    <button type="submit">전송</button>
                </div>
            </form>
        </div>
    </>;
};
export default ListForm;
