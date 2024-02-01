import './style/Lists.css';
import Items from './Items';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import ListForm from './listForm/ListForm';

const Lists = (props) => {
    console.log(props);
    return (<>
        <ListForm/>
        {/*<Heading content="title"/>*/}
        <Row className="list">
            {
                props.db.map((item) => {
                    return <Items name={item.name} email={item.email} thumb={item.thumb} id={item.id}/>;
                })
            }
        </Row></>);
};
export default Lists;
