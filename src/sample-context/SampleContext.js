import { Button, PageHeader, Row, Space } from 'antd'
import React, { useCallback, useContext, useMemo, useState } from 'react'
// import { connect } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { TodoContext } from './ProviderContext';
export default function SampleContext() {
  const navigate = useNavigate();
  const { setUser } = useContext(TodoContext);

   const handleChangeUser=useCallback(
    () => {

      //yeni bir şey oluşmuyor
      setUser(prev => ({ ...prev, name: 'emre' }))
    },
    [setUser],
  )
  
  
  return (
    console.log('sampleContextMain'),
    <>
      <PageHeader
        title={<h3>context</h3>}
        extra={[
          <Button type="primary" style={!window.location.pathname.includes('todo') ? { background: 'blue' } : {}} onClick={() => navigate('')}>TodoListContext</Button>,
          <Button type="primary" style={window.location.pathname.includes('todo') ? { background: 'blue' } : {}} onClick={() => navigate('todo')}>UserContext</Button>
        ]} />
      <Row style={{padding:'10px'}}>
        <Button type='primary' onClick={ handleChangeUser}>user change</Button>
      </Row>
      <Routes >
        <Route caseSensitive path="/" element={<TodoListArea />}>
        </Route>
        <Route caseSensitive path="/todo" element={<UserArea></UserArea>}>
        </Route>
      </Routes>
    </>
  )
}



const TodoListArea = () => {
  const { todoList, user } = useContext(TodoContext);

  return useMemo(() => {
    console.log('inputArea');
    return (<div style={{ border: '1px solid lightGrey' }}>
    <code>
      <p>Todo List Context</p>
      {JSON.stringify(todoList, '\r')}
      <p>User Context</p>
      {JSON.stringify(user, '\r')}
    </code>
  </div>)}, [todoList, user]);
}

const UserArea = () => {
  const { user } = useContext(TodoContext);
const [compUser, setCompUser] = useState({
  name:'fatih emre',
  age:22
})
  return useMemo(() => {
    console.log('inputArea');
    return (
    <div style={{ border: '1px solid lightGrey' }}>
    <div style={{padding:'10px'}}>
    <Button type='primary' onClick={()=>setCompUser(prev=>({...prev,name:'Hasan'}))}>Comp User Change</Button>
    </div>
    <code>
      <p>User Context</p>
      {JSON.stringify(user, '\r')}
      <p>Comp User State</p>
      {JSON.stringify(compUser, '\r')}
    </code>
  </div>)}, [compUser, user]);
}






