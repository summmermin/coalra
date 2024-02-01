import './style/Lists.css';
import ItemThumb from '../../ItemThumb';
import ItemDesc from '../../ItemDesc';
import {useState} from 'react';
import ItemEl from './ItemEl';

const Items = (props) => {
    const [name, setName] = useState(props.name);
    const ClickFn = () => {
        if (name === '김당당') {
            setName('돌아가');
        } else {
            setName('김당당');
        }
    };
    return (
        <div className="list_item">
            <img src={props.thumb} alt={props.name}/>
            <ItemEl title="이름" content={name}/>
            <ItemEl title="이메일" content={props.email}/>
            <button onClick={ClickFn}>클릭</button>
        </div>);
};
export default Items;
