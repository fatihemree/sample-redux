import { List } from 'antd'
import React, { useEffect, useState } from 'react'

export default function Log({counter}) {
    const [logList, setLogList] = useState([])
    useEffect(() => {
        setLogList(logList => [...logList, ` render ${counter}`])
    
    //   return () => {
    //     setLogList([]);
    //   }
    }, [counter])
    
  return (
    <List
    size="large"
    header={<div>Log List</div>}
    bordered
    dataSource={logList}
    renderItem={item => <List.Item>{item}</List.Item>}
/>
  )
}
