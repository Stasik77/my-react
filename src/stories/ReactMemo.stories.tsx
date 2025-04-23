import React, {memo, useState} from 'react';

export default {
    title: 'React.memo demo',
}

const Counter = memo((props: any) => {
    console.log('Users secret is empty222');
    return <div>{props.count}</div>
})

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secret is empty');
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['pete', 'bob', 'peti', 'bob']);

    const addUser = () => {

        const newUser = [...users,'pete'+ new Date().getTime()]

setUsers(newUser);
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}