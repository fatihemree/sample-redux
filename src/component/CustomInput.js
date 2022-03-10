import { Button, Col, Input, Row } from 'antd'
import React, { useState } from 'react'


export default function CustomInput({callClick}) {
  const [value, setValue] = useState('');
  return (
    <Row justify='center'>
      <Col span={12}>
        <Input.Group compact>
          <Input className='add-todo-input' value={value} onChange={(e)=>setValue(e.target.value)}/>
          <Button className='add-todo-button'  type="primary" onClick={()=>callClick(value)}>Ekle</Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
