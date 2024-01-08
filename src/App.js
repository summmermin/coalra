import logo from './logo.svg';
import {Fragment} from 'react';
import Member from './Member';
import Picture from './Picture';
import Mission from './Mission';
import MemberItems from './MemberItems';

function App() {
    const MemberDB = [
        {id: 'm1', name: '김경아', thumb: 'http://qwerew.cafe24.com/images/pet-1.jpg', email: 'abc@defg.com'},
        {id: 'm2', name: '김망고', thumb: 'http://qwerew.cafe24.com/images/pet-2.jpg', email: 'efg@defg.com'},
        {id: 'm3', name: '김민정', thumb: 'http://qwerew.cafe24.com/images/pet-3.jpg', email: 'hij@defg.com'},
        {id: 'm4', name: '윤현선', thumb: 'http://qwerew.cafe24.com/images/pet-4.jpg', email: 'lmn@defg.com'},
        {id: 'm4', name: '이소정', thumb: 'http://qwerew.cafe24.com/images/pet-5.jpg', email: 'opq@defg.com'},
    ];
    return (
        <Fragment>
            {/*Fragment 컴파일 이후에도 불필요한 div 요소가 생성되지 않습니다. (Fragment는 <></> 빈걸로도 작성할 수 있음.*/}
            {
                MemberDB.map((item, key) => {
                    return <MemberItems name={item.name} thumb={item.thumb} email={item.email} key={key}/>;
                })
            }
        </Fragment>
    );
}

export default App;
