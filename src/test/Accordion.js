//Accordion.js
import Panel from './Panel';
import {useState} from 'react';

const Accordion = (props) => {
    const [active, setActive] = useState(0);
    return (
        <>
            <Panel active={active === 0} onActive={() => {
                setActive(0);
            }} title={'패널1'}>
                BMW가 차세대 5시리즈의 데뷔 시점을 2023년 10월로 확정짓고, 적용될 주요
                신기술들을 공개했다.
            </Panel>
            <Panel active={active === 1} onActive={() => {
                setActive(1);
            }} title={'패널2'}>
                적용될 주요 신기술들을 공개했다.
            </Panel>
        </>
    );
};
export default Accordion;
