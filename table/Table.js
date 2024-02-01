import {useState} from 'react';
import '../table/Table.css';

const data = [
    {
        icon: '/imgs/ic-logo-01.jpg',
        employeeId: '01',
        user: 'John Doe',
        email: 'johndoe@email.com',
        position: 'Frontend Developer',
    },
    {
        icon: '/imgs/ic-logo-02.png',
        employeeId: '02',
        user: 'Sara',
        email: 'sara@email.com',
        position: 'HR Executive',
    },
    {
        icon: '/imgs/ic-logo-02.png',
        employeeId: '03',
        user: 'Mike',
        email: 'mike@email.com',
        position: 'Backend Developer',
    },
];

const Table = () => {

    const [employeeData, setEmployeeData] = useState(data);

    const changeEm = (e, employeeId) => {
        const {name, value} = e.target;

        const editData = employeeData.map((item) =>
            item.employeeId === employeeId && name ? {...item, [name]: value} : item
        );

        setEmployeeData(editData);
    };

    return (
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th>User</th>
                    <th className="w-[8%]"></th>
                    <th>Email</th>
                    <th>Position</th>
                </tr>
                </thead>
                <tbody>
                {employeeData.map(({employeeId, icon, user, email, position}) => (
                    <tr key={employeeId}>
                        <td>
                            <input
                                user="user"
                                value={user}
                                type="text"
                                onChange={(e) => changeEm(e, employeeId)}
                                placeholder="Type Name"
                            />
                        </td>
                        <td>
                            <div className="pr-[0.5rem] flex flex-row justify-center">
                                <img
                                    className="logo-img"
                                    icon="icon"
                                    src={icon}
                                    onChange={(e) => changeEm(e, employeeId)}
                                />
                            </div>
                        </td>
                        <td>
                            <input
                                name="email"
                                value={email}
                                type="email"
                                onChange={(e) => changeEm(e, employeeId)}
                                placeholder="Type Email"
                            />
                        </td>
                        <td>
                            <input
                                name="position"
                                type="text"
                                value={position}
                                onChange={(e) => changeEm(e, employeeId)}
                                placeholder="Type Position"
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default Table;
