//MemberItmes.js
import '../css/memberItem.css';

const ItemsDesc = (props) => {
    return (
        <>
            <div className="list_desc"><span className="title">이름</span><span>{props.name}</span><br/>
            </div>
            <div className="list_desc">
                <span className="title">이메일</span><span>{props.email}</span>
            </div>
        </>
    );
};
export default ItemsDesc;
