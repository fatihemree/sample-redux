import { Button, Col, PageHeader, Row } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom'
import CustomInput from '../component/CustomInput';
import { increment, setTodo, setUser } from './store/action';
export default function SampleRedux() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <>
            <PageHeader
                title={<h3>Redux</h3>}
                extra={[
                    <Button type="primary" style={window.location.pathname.includes('counter') ? { background: 'blue' } : {}} onClick={() => navigate('counter')}>Counter</Button>,
                    <Button type="primary" style={window.location.pathname.includes('user') ? { background: 'blue' } : {}} onClick={() => navigate('user')}>User</Button>,
                    <Button type="primary" style={window.location.pathname.includes('todo') ? { background: 'blue' } : {}} onClick={() => navigate('todo')}>Todo</Button>
                ]} />
            <h2>User name change</h2>
            <CustomInput callClick={(val) => dispatch(setUser(val))}></CustomInput>
            <h2>Todo[0] task change </h2>
            <CustomInput callClick={(val) => dispatch(setTodo(val))}></CustomInput>
            <Routes>
                <Route path='counter' element={<Counter></Counter>} />
                <Route path='user' element={<User></User>} />
                <Route path='todo' element={<Todo></Todo>} />
            </Routes>
        </>
    )
}


const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (console.log('renderCounter', counter),
        <>
            <h4>Counter</h4>
            <Button type='primary' onClick={() => dispatch(increment())}> INCREMENT </Button>
            <h1>{counter}</h1>
            <Row>
            </Row>
        </>
    )
}

const User = () => {
    const user = useSelector(state => state.user);

    return (console.log('renderUser', user),
        <>
            <h4>User</h4>
            <code>
                <p>User Redux</p>
                {JSON.stringify(user, '\r')}
            </code>
        </>
    )
}

const Todo = () => {
    const todo = useSelector(state => state.todo);

    return (
        console.log('renderTodo', todo),
        <>
            <h4>Todo</h4>
            <code>
                <p>Todo Redux</p>
                {JSON.stringify(todo, '\r')}
            </code>
        </>
    )
}
