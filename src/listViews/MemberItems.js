//MemberItmes.js
import '../css/memberItem.css';
import ItemDesc from '../test/ItemDesc';
import {useState} from 'react';

const MemberItems = (props) => {
    const MemberBtnFn = () => {
        console.log('click!');
        setName('겸겸');
    };
    const [name, setName] = useState(props.name);
    console.log(name, setName, ':::name');
    return (
        <>
            <ul className="list_body">
                <li className="list_item">
                    <div className="list_img"><img src={props.thumb} alt={props.thumb}/></div>
                    <ItemDesc name={name} email={props.email}/>
                    <button onClick={MemberBtnFn}>click!
                        {/*소괄호 사용하면 안됨,  jsx 코드가 반환될때 코드의 라인들이 웹브라우저의 해석기에 의해 평가됨*/}
                    </button>
                </li>
            </ul>
        </>
    );
};
export default MemberItems;
