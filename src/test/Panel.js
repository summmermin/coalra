//Panel.js
import {useState} from 'react';

export default function Panel({title, children, active, onActive}) {
    const [isActive, setIsActive] = useState(false);
    return (<>
        <section>
            <h3>{title}</h3>
        </section>
        {
            active ? (<p>{children}</p>) : (<button onClick={onActive}>show</button>)
        }
    </>);
}
