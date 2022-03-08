import { Button, PageHeader, Row } from 'antd'
import React, { useCallback, useContext, useMemo } from 'react'
// import { connect } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CustomInput from '../component/CustomInput';
import CustomTable from '../component/CustomTable';
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
          <Button type="primary" style={window.location.pathname.includes('todo') ? { background: 'blue' } : {}} onClick={() => navigate('todo')}>TodoList</Button>,
          <Button type="primary" style={!window.location.pathname.includes('todo') ? { background: 'blue' } : {}} onClick={() => navigate('')}>Input</Button>
        ]} />
      <Row>
        <Button type='primary' onClick={ handleChangeUser}>user change</Button>
      </Row>
      <Routes >
        <Route caseSensitive path="/" element={<InputArea />}>
        </Route>
        <Route caseSensitive path="/todo" element={<CustomTable></CustomTable>}>
        </Route>
      </Routes>
    </>
  )
}



const InputArea = () => {
  const { todoList,user } = useContext(TodoContext);

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

  // return renderComp;
}






